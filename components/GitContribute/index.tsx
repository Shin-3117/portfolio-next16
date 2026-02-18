'use client';

import React, { useState, useEffect, useMemo,useRef } from 'react';
import { format, startOfYear, endOfYear, eachDayOfInterval, getDay } from 'date-fns';

interface ContributionData {
    [date: string]: {
        github: number;
        gitlab: number;
        repos: {
            [repoName: string]: number;
        };
    };
}

const GITHUB_COLOR = '#39d353'; // GitHub Green
const GITLAB_COLOR = '#fc6d26'; // GitLab Orange
const EMPTY_COLOR = '#ebedf0'; // Empty Gray (Light mode)

type Provider = 'all' | 'github' | 'gitlab';

export default function GitContribute() {
    const [data, setData] = useState<ContributionData>({});
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const availableYears = useMemo(() => {
        const years = new Set([currentYear]);
        Object.keys(data).forEach(date => {
            years.add(new Date(date).getFullYear());
        });
        return Array.from(years).sort((a, b) => b - a);
    }, [data, currentYear]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('/api/git-contribute');
            if (res.ok) {
                const json = await res.json();
                setData(json);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const updateData = async (startYear?: number, provider: Provider = 'all') => {
        setLoading(true);
        try {
            const res = await fetch('/api/git-contribute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ startYear, provider }),
            });
            if (res.ok) {
                const json = await res.json();
                if (json.success) {
                    setData(json.data);
                } else {
                    setData(json);
                }
            }
        } catch (error) {
            console.error('Failed to update data:', error);
        } finally {
            setLoading(false);
        }
    };

    const getCellColor = (dateStr: string) => {
        const dayData = data[dateStr];
        if (!dayData) return EMPTY_COLOR;

        const hasGithub = dayData.github > 0;
        const hasGitlab = dayData.gitlab > 0;

        if (hasGithub && hasGitlab) {
            return `linear-gradient(135deg, ${GITHUB_COLOR} 50%, ${GITLAB_COLOR} 50%)`;
        }
        if (hasGithub) return GITHUB_COLOR;
        if (hasGitlab) return GITLAB_COLOR;

        return EMPTY_COLOR;
    };

    const daysInYear = useMemo(() => {
        const start = startOfYear(new Date(selectedYear, 0, 1));
        const end = endOfYear(new Date(selectedYear, 0, 1));
        return eachDayOfInterval({ start, end });
    }, [selectedYear]);

    const firstDay = daysInYear[0];
    const startDayOfWeek = getDay(firstDay); // 0=Sun, 1=Mon...
    const paddedDays = [...Array(startDayOfWeek).fill(null), ...daysInYear];
    const totalColumns = useMemo(() => Math.ceil(paddedDays.length / 7), [paddedDays.length]);

// 3) 그리드 컨테이너 ref + 관찰로 width 추적
    const gridRef = useRef<HTMLDivElement | null>(null);
    const [gridWidth, setGridWidth] = useState(0);

    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;

        const ro = new ResizeObserver((entries) => {
            const entry = entries[0];
            const w = Math.floor(entry.contentRect.width);
            setGridWidth(w);
        });

        ro.observe(el);

        // 초기값도 세팅(옵저버가 바로 안 쏠 때 대비)
        setGridWidth(Math.floor(el.getBoundingClientRect().width));

        return () => ro.disconnect();
    }, []);

// 4) 셀 크기 계산 (너비를 "컬럼 수"로 나눠 꽉 채움, 높이도 동일)
    const cellPx = useMemo(() => {
        const gapPx = 4; // gap-1 = 4px (Tailwind 기본값)
        if (!gridWidth || !totalColumns) return 10;

        const raw = Math.floor((gridWidth - gapPx * (totalColumns - 1)) / totalColumns);

        // 너무 작거나 너무 커지지 않게 제한(원하면 조정)
        return Math.max(6, Math.min(14, raw));
    }, [gridWidth, totalColumns]);

    const cellStyle = useMemo(
      () => ({ width: `${cellPx}px`, height: `${cellPx}px` }),
      [cellPx]
    );

    return (
      <div className="rounded-lg border border-black/10 p-4 dark:border-white/15 overflow-x-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 min-w-[700px]">
              <div>
                  <h2 className="text-xl font-bold">Git Contributions</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedYear} Contributions
                  </p>
              </div>

              <div className="flex items-center gap-2">
                  <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                      {availableYears.map(year => (
                        <button
                          key={year}
                          onClick={() => setSelectedYear(year)}
                          className={`px-3 py-1 text-sm rounded-md transition-all ${selectedYear === year
                            ? 'bg-white dark:bg-gray-700 shadow-sm font-medium'
                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                          }`}
                        >
                            {year}
                        </button>
                      ))}
                  </div>
                  <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
                  <div className="flex gap-2">
                      <button
                        onClick={() => updateData(undefined, 'all')}
                        disabled={loading}
                        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 disabled:opacity-50 text-sm transition-all font-medium"
                      >
                          {loading ? 'Refreshing...' : 'Update'}
                      </button>

                      {/*<button*/}
                      {/*  onClick={() => updateData(2023, 'github')}*/}
                      {/*  disabled={loading}*/}
                      {/*  title="GitHub 데이터만 동기화"*/}
                      {/*  className="px-3 py-2 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 rounded-lg hover:opacity-90 disabled:opacity-50 text-xs transition-all font-medium"*/}
                      {/*>*/}
                      {/*    Sync GitHub*/}
                      {/*</button>*/}

                      {/*<button*/}
                      {/*  onClick={() => updateData(2023, 'all')}*/}
                      {/*  disabled={loading}*/}
                      {/*  title="2023년부터 전체 데이터 동기화"*/}
                      {/*  className="px-3 py-2 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 disabled:opacity-50 text-xs transition-all font-medium"*/}
                      {/*>*/}
                      {/*    Sync All (2023~)*/}
                      {/*</button>*/}
                  </div>
              </div>
          </div>

          {/* Month Labels + Graph (aligned columns) */}
          <div
            className="grid gap-2 overflow-auto"
            style={{
                gridTemplateColumns: '28px 1fr', // 왼쪽 요일 라벨 폭 + 그래프
            }}
          >
              {/* Month Labels Row (col 2) */}
              <div className="col-start-2">
                  <div
                    className="grid grid-flow-col gap-1 text-[10px] text-gray-400 select-none"
                    style={{
                        gridAutoColumns: `${cellPx}px`,
                    }}
                  >
                      {(() => {
                          const yearStart = startOfYear(new Date(selectedYear, 0, 1));
                          const yearEnd = endOfYear(new Date(selectedYear, 0, 1));

                          let lastShownMonth: number | null = null;

                          return Array.from({ length: totalColumns }, (_, col) => {
                              const slice = paddedDays.slice(col * 7, col * 7 + 7);
                              const rep = slice.find(d => d && d >= yearStart && d <= yearEnd) as Date | undefined;

                              if (!rep) return <div key={`m-${col}`} className="h-3 leading-3" />;

                              const m = rep.getMonth();
                              const shouldShow = lastShownMonth === null || m !== lastShownMonth;

                              if (shouldShow) lastShownMonth = m;

                              return (
                                <div key={`m-${col}`} className="h-3 leading-3">
                                    {shouldShow ? format(rep, 'MMM') : ''}
                                </div>
                              );
                          });
                      })()}
                  </div>
              </div>

              {/* Day Labels (col 1) */}
              <div className="grid grid-rows-7 gap-1 text-xs text-gray-400 h-fit pr-2 pt-[1px] leading-[10px]">
                  <div className="h-[10px]"></div>
                  <div className="h-[10px] flex items-center">Mon</div>
                  <div className="h-[10px]"></div>
                  <div className="h-[10px] flex items-center">Wed</div>
                  <div className="h-[10px]"></div>
                  <div className="h-[10px] flex items-center">Fri</div>
                  <div className="h-[10px]"></div>
              </div>

              {/* Graph Grid (col 2) */}
              <div
                ref={gridRef}
                className="grid grid-rows-7 grid-flow-col gap-1"
                style={{ gridAutoColumns: `${cellPx}px` }}
              >
                  {paddedDays.map((day, index) => {
                      if (!day) {
                          return <div key={`empty-${index}`} style={cellStyle} />;
                      }

                      const dateStr = format(day, 'yyyy-MM-dd');
                      const background = getCellColor(dateStr);

                      return (
                        <div
                          key={dateStr}
                          onClick={() => setSelectedDate(dateStr)}
                          className="rounded-sm cursor-pointer hover:border hover:border-black dark:hover:border-white transition-all relative group"
                          style={{ ...cellStyle, background }}
                        >
                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap z-50 pointer-events-none">
                                {dateStr}
                                {data[dateStr] && ` (${data[dateStr].github + data[dateStr].gitlab})`}
                            </div>
                        </div>
                      );
                  })}
              </div>
          </div>

          {selectedDate && data[selectedDate] && (
            <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 animate-in fade-in slide-in-from-top-2">
                <h3 className="font-semibold mb-3 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {selectedDate} Contributions
                </h3>
                <ul className="text-sm space-y-2">
                    {Object.entries(data[selectedDate].repos).map(([repo, count]) => (
                      <li key={repo} className="flex justify-between items-center bg-white dark:bg-gray-700/50 p-2 rounded border border-gray-100 dark:border-gray-700">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{repo}</span>
                          <span className="text-gray-500 bg-gray-100 dark:bg-gray-600 px-2 py-0.5 rounded-full text-xs">{count} commits</span>
                      </li>
                    ))}
                    {Object.keys(data[selectedDate].repos).length === 0 && (
                      <li className="text-gray-500 italic">No specific repository details available.</li>
                    )}
                </ul>
            </div>
          )}
      </div>
    );
}