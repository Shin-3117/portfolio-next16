export default function CoA() {
  return <article className="rounded-lg border border-black/10 p-5 dark:border-white/15">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-lg font-semibold">COA (6주/6명) · FE</h3>
      <div className={'flex gap-2 items-center'}>
        <a
          className="underline text-sm"
          href="https://github.com/CommitAnalyze/CoA"
          target="_blank"
          rel="noopener noreferrer"
        >
          링크
        </a>
        <span className="text-xs text-black/60 dark:text-white/60">24.04 ~ 24.05</span>
      </div>
    </div>
    <p className="mt-1 text-sm text-black/70 dark:text-white/70">
      커밋 기반 프로젝트 기여도 분석 사이트
    </p>
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
}