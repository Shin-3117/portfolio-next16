export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            신현중
          </a>
          <nav className="hidden gap-4 text-sm sm:flex">
            <a className="hover:underline" href="#projects">프로젝트</a>
            <a className="hover:underline" href="#awards">수상</a>
            <a className="hover:underline" href="#skills">기술</a>
            <a className="hover:underline" href="#community">커뮤니티</a>
            <a className="hover:underline" href="#career">경력</a>
            <a className="hover:underline" href="#education">학력</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Hero */}
        <section className="mb-12 sm:mb-16">
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

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold">Project</h2>
          <div className="mt-6 flex flex-col gap-8">
            {/* COA */}
            <article className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">COA (6주/6명) · FE</h3>
                <span className="text-xs text-black/60 dark:text-white/60">24.04 ~ 24.05</span>
              </div>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                커밋 기반 프로젝트 기여도 분석 사이트
              </p>
              <div className="mt-2 text-sm">
                <a
                  className="text-blue-700 underline dark:text-blue-400"
                  href="https://github.com/CommitAnalyze/CoA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  저장소 링크
                </a>
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-medium">담당</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                  <li>깃허브, 깃랩 통합 Contribution 차트 컴포넌트 제작</li>
                  <li>사용 언어 통계 차트 컴포넌트 제작</li>
                  <li>사용 언어 통계 barchartrace 컴포넌트 제작</li>
                  <li>프로젝트 기간 차트 컴포넌트 제작</li>
                  <li>분석결과 점수 Radar 차트 컴포넌트 제작</li>
                </ul>
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">
                <span className="font-medium">기술</span>: TypeScript, Next, D3.js, Zustand
              </p>
            </article>

            {/* W-E */}
            <article className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">W-E (6주/6명) · FE</h3>
                <span className="text-xs text-black/60 dark:text-white/60">24.02 ~ 24.04</span>
              </div>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">10대 청소년을 위한 금융 관리 앱</p>
              <div className="mt-2 text-sm">
                <a
                  className="text-blue-700 underline dark:text-blue-400"
                  href="https://github.com/TeamAquaDan/W-E"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  저장소 링크
                </a>
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-medium">담당</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                  <li>로그인 페이지 제작</li>
                  <li>보안 키보드 컴포넌트 제작</li>
                  <li>가계부 및 지출 내역 통계 제작</li>
                </ul>
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">
                <span className="font-medium">기술</span>: Flutter
              </p>
            </article>

            {/* UH */}
            <article className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">UH (6주/6명) · FE</h3>
                <span className="text-xs text-black/60 dark:text-white/60">24.01 ~ 24.02</span>
              </div>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">WebSocket 활용 게임 사이트</p>
              <div className="mt-2 text-sm">
                <a
                  className="text-blue-700 underline dark:text-blue-400"
                  href="https://github.com/CommitAnalyze/CoA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  저장소 링크
                </a>
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-medium">담당</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                  <li>화상 통신 기능 구현: WebRTC session 생성 및 수정을 서버 측과 통신하여 기능 구현</li>
                  <li>대기방 채팅 기능 구현</li>
                  <li>게임 기능 구현</li>
                </ul>
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">
                <span className="font-medium">기술</span>: JavaScript, React, WebSocket, WebRTC
              </p>
            </article>

            {/* SimpleSupportINVEST */}
            <article className="rounded-lg border border-black/10 p-5 dark:border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">SimpleSupportINVEST (2주/2명) · FE</h3>
                <span className="text-xs text-black/60 dark:text-white/60">23.11 ~ 23.11</span>
              </div>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">투자를 위한 종합 정보 제공 사이트</p>
              <div className="mt-2 text-sm">
                <a
                  className="text-blue-700 underline dark:text-blue-400"
                  href="https://github.com/Shin-3117/SSAFY_Team_Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  저장소 링크
                </a>
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-medium">담당</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                  <li>회원가입, 로그인 기능 구현</li>
                  <li>게시글, 댓글, 대댓글 CRUD 기능 구현</li>
                  <li>예/적금 금리 비교 페이지 제작</li>
                  <li>은행 위치 지도 컴포넌트 제작 : 맵 마커 및 장소 정보 표시</li>
                </ul>
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">
                <span className="font-medium">기술</span>: TypeScript, vue.js
              </p>
            </article>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Award</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <div className="flex items-center justify-between">
                <p className="font-medium">삼성 청년 SW아카데미 자율프로젝트</p>
                <span className="text-xs text-black/60 dark:text-white/60">24.05.24</span>
              </div>
              <p className="mt-1 text-black/70 dark:text-white/70">
                커밋 기반 프로젝트 기여도 분석 사이트 ·
                <a
                  href="https://github.com/CommitAnalyze/CoA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 underline"
                >
                  링크
                </a>
                · 우수상 · 삼성 청년 SW아카데미
              </p>
            </li>
            <li className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <div className="flex items-center justify-between">
                <p className="font-medium">삼성 청년 SW아카데미 공통프로젝트</p>
                <span className="text-xs text-black/60 dark:text-white/60">24.03.03</span>
              </div>
              <p className="mt-1 text-black/70 dark:text-white/70">
                커밋 기반 프로젝트 기여도 분석 사이트 ·
                <a
                  href="https://github.com/Shin-3117/UH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 underline"
                >
                  링크
                </a>
                · 우수상 · 삼성 청년 SW아카데미
              </p>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <h3 className="text-sm font-medium">Strong</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                JavaScript / TypeScript / React / Next
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <h3 className="text-sm font-medium">knowledgeable</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                WebSocket / WebRTC / Vue.js / Python / Django / Flutter
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/15 sm:col-span-2">
              <h3 className="text-sm font-medium">ETC</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">Git</p>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Community</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <p className="font-medium">삼성 청년 SW아카데이 / 23.07 ~ 24.06</p>
              <p className="mt-1 text-black/70 dark:text-white/70">
                Python, Vue.js, Django 등을 학습하고 팀 프로젝트를 3회 진행
              </p>
            </li>
            <li className="rounded-lg border border-black/10 p-4 dark:border-white/15">
              <p className="font-medium">코드스테이츠 경상남도 ABC-Lab 웹프론트엔드 개발자 부트캠프 / 23.01 ~ 24.04</p>
              <p className="mt-1 text-black/70 dark:text-white/70">
                JavaScript, React, Recoil 등을 학습하고 팀 프로젝트를 1회 진행
              </p>
            </li>
          </ul>
        </section>

        {/* Career */}
        <section id="career" className="mt-16 scroll-mt-20">
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

        {/* Education */}
        <section id="education" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-6 rounded-lg border border-black/10 p-4 text-sm dark:border-white/15">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium">부산대 광메카트로닉스공학과</p>
              <span className="text-xs text-black/60 dark:text-white/60">2016.03 ~ 2022.02</span>
            </div>
            <p className="mt-2 text-black/70 dark:text-white/70">학점: 3.8 / 4.5</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-black/10 py-6 text-xs text-black/60 dark:border-white/10 dark:text-white/60">
          <p>
            © {new Date().getFullYear()} 신현중. 본 페이지는 README.md 내용을 기반으로 제작되었습니다.
          </p>
        </footer>
      </main>
    </div>
  );
}
