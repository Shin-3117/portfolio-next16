import StrongSkills from "@/components/Skills/Strong";
import KnowledgeableSkills from "@/components/Skills/Knowledgeable";
import EtcSkills from "@/components/Skills/ETC";
import HistoryChart from "@/components/Info/HistoryChart";
import CoA from "@/components/projects/CoA";
import W_E from "@/components/projects/W-E";
import UH from "@/components/projects/UH";
import SimpleSupportInvest from "@/components/projects/SimpleSupportInvest";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            신현중
          </a>
          <nav className="hidden gap-4 text-sm sm:flex">
            <Link className="hover:underline" href="#skills">기술</Link>
            <Link className="hover:underline" href="#projects">프로젝트</Link>
            <Link className="hover:underline" href="#awards">수상</Link>
            <Link className="hover:underline" href="#career">경력</Link>
            <Link className="hover:underline" href="#community">커뮤니티</Link>
            <Link className="hover:underline" href="#education">학력</Link>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-6 py-12 sm:py-16 flex flex-col gap-y-6 sm:gap-y-8">
        {/* Info */}
        <section>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            신현중 | 프론트엔드개발자
          </h1>
          <p className="mt-3 text-base text-black/70 dark:text-white/70">
            프론트엔드로 참여한 팀 프로젝트에서 두 차례 우수상을 수상했습니다. MES 제작에 프론트엔드 담당 중 입니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full border border-black/10 px-3 py-1 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"
              href="https://github.com/Shin-3117"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub · Shin-3117
            </a>
            <a
              className="rounded-full border border-black/10 px-3 py-1 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"
              href="mailto:qsc3117@naver.com"
            >
              Email · qsc3117@naver.com
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <StrongSkills/>
            <KnowledgeableSkills/>
            <EtcSkills/>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold">Project</h2>
          <div className="mt-6 flex flex-col gap-8">
            <CoA/>
            <W_E/>
            <UH/>
            <SimpleSupportInvest/>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold">Award</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <div className="flex items-center justify-between">
                <p className="font-medium">삼성 청년 SW아카데미 자율프로젝트</p>
                <div className={'flex gap-2 items-center'}>
                  <a
                    href="https://github.com/CommitAnalyze/CoA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 underline"
                  >
                    링크
                  </a>
                <span className="text-xs text-black/60 dark:text-white/60">24.05.24</span>
                </div>
              </div>
              <p className="mt-1 text-black/70 dark:text-white/70">
                우수상 · 삼성 청년 SW아카데미
              </p>
            </li>
            <li className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <div className="flex items-center justify-between">
                <p className="font-medium">삼성 청년 SW아카데미 공통프로젝트</p>
                <div className={'flex gap-2 items-center'}>
                  <a
                    href="https://github.com/Shin-3117/UH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 underline"
                  >
                    링크
                  </a>
                <span className="text-xs text-black/60 dark:text-white/60">24.03.03</span>
                </div>
              </div>
              <p className="mt-1 text-black/70 dark:text-white/70">
                우수상 · 삼성 청년 SW아카데미
              </p>
            </li>
          </ul>
        </section>

        <HistoryChart/>

        {/* Career */}
        <section id="career" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold">Career</h2>
          <div className="mt-6 rounded-lg border border-black/10 p-4 text-sm dark:border-white/15">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium">WIMR / FE</p>
              <span className="text-xs text-black/60 dark:text-white/60">24.08 ~ 재직중</span>
            </div>
            <p className="mt-2 text-black/70 dark:text-white/70">
              <span className="font-medium">기술</span>: JavaScript, TypeScript, React, Next, React-Query, Zustand
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>MES에서의 프론트엔드 개발</li>
            </ul>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold">Community</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium">삼성 청년 SW아카데이</p>
                <span className="text-xs text-black/60 dark:text-white/60">23.07 ~ 24.06</span>
              </div>
              <p className="mt-1 text-black/70 dark:text-white/70">
                Python, Vue.js, Django 등을 학습하고 팀 프로젝트를 3회 진행
              </p>
            </li>
            <li className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium">코드스테이츠 경상남도 ABC-Lab 웹프론트엔드 개발자 부트캠프</p>
                <span className="text-xs text-black/60 dark:text-white/60">23.01 ~ 24.04</span>
              </div>
              <p className="mt-1 text-black/70 dark:text-white/70">
                JavaScript, React, Recoil 등을 학습하고 팀 프로젝트를 1회 진행
              </p>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-6 rounded-lg border border-black/10 p-4 text-sm dark:border-white/15">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium">부산대 광메카트로닉스공학과</p>
              <span className="text-xs text-black/60 dark:text-white/60">2016.03 ~ 2022.02</span>
            </div>
            <p className="mt-2 text-black/70 dark:text-white/70">학점: 3.82 / 4.5</p>
          </div>
        </section>



        {/* Footer */}
        <footer className="border-t border-black/10 py-6 text-xs text-black/60 dark:border-white/10 dark:text-white/60 flex gap-2 items-center">
          <p>
            신현중 | 프론트엔드개발자
          </p>
          <a
            className="rounded-full border border-black/10 px-3 py-1 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"
            href="https://github.com/Shin-3117"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub · Shin-3117
          </a>
          <a
            className="rounded-full border border-black/10 px-3 py-1 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"
            href="mailto:qsc3117@naver.com"
          >
            Email · qsc3117@naver.com
          </a>
        </footer>
      </main>
    </div>
  );
}
