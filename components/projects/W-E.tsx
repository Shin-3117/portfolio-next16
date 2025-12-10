export default function W_E() {
  return <article className="rounded-lg border border-black/10 p-5 dark:border-white/15">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-lg font-semibold">W-E (6주/6명) · FE</h3>
      <div className={'flex gap-2 items-center'}>
        <a
          className="underline text-sm"
          href="https://github.com/TeamAquaDan/W-E"
          target="_blank"
          rel="noopener noreferrer"
        >
          링크
        </a>
        <span className="text-xs text-black/60 dark:text-white/60">24.02 ~ 24.04</span>
      </div>
    </div>
    <p className="mt-1 text-sm text-black/70 dark:text-white/70">10대 청소년을 위한 금융 관리 앱</p>
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
}