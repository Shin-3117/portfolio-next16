import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Define the shape of our data
interface ContributionData {
    [date: string]: {
        github: number;
        gitlab: number;
        repos: {
            [repoName: string]: number;
        };
    };
}

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'contributions.json');

// Helper to ensure data file exists
async function ensureDataFile() {
    try {
        await fs.access(DATA_FILE_PATH);
    } catch {
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify({}, null, 2));
    }
}

// Helper to read data
async function readData(): Promise<ContributionData> {
    await ensureDataFile();
    const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
}

// Helper to write data
async function writeData(data: ContributionData) {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2));
}

// GitHub Fetch Logic (GraphQL) - yearly chunking to avoid 1y window limitation
async function fetchGitHubData(since: string, token: string) {
    if (!token) {
        console.warn('GITHUB_TOKEN not set');
        return [];
    }

    const endpoint = 'https://api.github.com/graphql';

    const query = `
      query($from: DateTime!, $to: DateTime!) {
        viewer {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const start = new Date(`${since}T00:00:00.000Z`);
    const now = new Date();

    // build [from, to] ranges with max 1-year window
    const ranges: Array<{ fromIso: string; toIso: string }> = [];
    let cursor = new Date(start);

    while (cursor <= now) {
        const from = new Date(cursor);

        // endExclusive = from + 1 year
        const end = new Date(from);
        end.setUTCFullYear(end.getUTCFullYear() + 1);

        // to = min(end, now)
        const to = end < now ? end : now;

        ranges.push({ fromIso: from.toISOString(), toIso: to.toISOString() });

        // next cursor = to (avoid infinite loop)
        cursor = new Date(to);
        // move forward 1 ms so ranges don't repeat the same instant
        cursor = new Date(cursor.getTime() + 1);
    }

    // Aggregate per day (avoid duplicates across boundaries)
    const dayCountMap = new Map<string, number>();

    for (const { fromIso, toIso } of ranges) {
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query,
                    variables: { from: fromIso, to: toIso },
                }),
            });

            if (!res.ok) {
                console.error('GitHub GraphQL fetch failed:', await res.text());
                continue;
            }

            const json = await res.json();

            if (json.errors?.length) {
                console.error('GitHub GraphQL errors:', JSON.stringify(json.errors, null, 2));
                continue;
            }

            const weeks = json?.data?.viewer?.contributionsCollection?.contributionCalendar?.weeks ?? [];
            for (const week of weeks) {
                for (const day of week.contributionDays ?? []) {
                    const dateStr: string = day.date; // YYYY-MM-DD
                    const count: number = day.contributionCount ?? 0;
                    if (count > 0) {
                        dayCountMap.set(dateStr, (dayCountMap.get(dateStr) || 0) + count);
                    }
                }
            }

            // light throttling to reduce secondary rate limiting
            await new Promise(r => setTimeout(r, 150));
        } catch (error) {
            console.error('Error fetching GitHub GraphQL data:', error);
        }
    }

    // Convert to the expected item list shape
    const items: Array<{ date: string; repo: string; count: number }> = [];
    for (const [date, count] of dayCountMap.entries()) {
        items.push({ date, repo: 'github', count });
    }

    // Sort by date asc for stability
    items.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

    return items;
}

// GitLab Fetch Logic (with pagination)
async function fetchGitLabData(since: string, token: string, host: string = 'gitlab.com') {
    if (!token) {
        console.warn('GITLAB_TOKEN not set');
        return [];
    }

    let allEvents: any[] = [];
    let page = 1;
    const perPage = 100;

    while (true) {
        const url = `https://${host}/api/v4/events?action=pushed&after=${since}&per_page=${perPage}&page=${page}&sort=asc`;

        try {
            const res = await fetch(url, {
                headers: {
                    'PRIVATE-TOKEN': token,
                },
            });

            if (!res.ok) {
                console.error(`GitLab fetch failed on page ${page}:`, await res.text());
                break;
            }

            const data = await res.json();
            if (!Array.isArray(data) || data.length === 0) break;

            allEvents = [...allEvents, ...data];

            if (data.length < perPage) break; // Last page

            page++;
        } catch (error) {
            console.error('Error fetching GitLab data:', error);
            break;
        }
    }
    return allEvents;
}

export async function GET() {
    const data = await readData();
    return NextResponse.json(data);
}

type Provider = 'all' | 'github' | 'gitlab';

export async function POST(request: Request) {
    const body = await request.json().catch(() => ({})); // Handle optional body
    const { startYear, provider } = body as { startYear?: number; provider?: Provider };

    const syncProvider: Provider = provider ?? 'all';

    const currentData = await readData();
    const dates = Object.keys(currentData).sort();

    let since = new Date();
    since.setFullYear(since.getFullYear() - 1); // Default 1 year ago

    if (startYear) {
        since = new Date(`${startYear}-01-01`);
    } else if (dates.length > 0) {
        const lastDate = dates[dates.length - 1];
        since = new Date(lastDate);
    }

    const sinceIso = since.toISOString().split('T')[0]; // YYYY-MM-DD

    const githubToken = process.env.GITHUB_TOKEN || '';
    const gitlabToken = process.env.GITLAB_TOKEN || '';
    const gitlabHost = process.env.GITLAB_HOST || 'gitlab.com';

    const [githubCommits, gitlabEvents] = await Promise.all([
        syncProvider === 'all' || syncProvider === 'github'
          ? fetchGitHubData(sinceIso, githubToken)
          : Promise.resolve([]),
        syncProvider === 'all' || syncProvider === 'gitlab'
          ? fetchGitLabData(sinceIso, gitlabToken, gitlabHost)
          : Promise.resolve([]),
    ]);

    // 1) GitHub
    githubCommits.forEach((item: any) => {
        const dateStr = item.date;
        const repoName = item.repo;
        const count = item.count;

        if (!currentData[dateStr]) {
            currentData[dateStr] = { github: 0, gitlab: 0, repos: {} };
        }

        currentData[dateStr].github += count;
        currentData[dateStr].repos[repoName] = (currentData[dateStr].repos[repoName] || 0) + count;
    });

    // 2) GitLab
    gitlabEvents.forEach((event: any) => {
        if (event.action_name === 'pushed to' || event.action_name === 'pushed new') {
            const dateStr = event.created_at.split('T')[0];
            const repoName = `gitlab-project-${event.project_id}`;

            if (!currentData[dateStr]) {
                currentData[dateStr] = { github: 0, gitlab: 0, repos: {} };
            }

            const count = event.push_data ? event.push_data.commit_count : 1;

            currentData[dateStr].gitlab += count;
            currentData[dateStr].repos[repoName] = (currentData[dateStr].repos[repoName] || 0) + count;
        }
    });

    await writeData(currentData);

    return NextResponse.json({
        success: true,
        provider: syncProvider,
        count: Object.keys(currentData).length,
        data: currentData,
    });
}