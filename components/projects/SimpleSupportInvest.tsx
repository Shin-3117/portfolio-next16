export default function SimpleSupportInvest() {
  return <article className="rounded-lg border border-black/10 p-5 dark:border-white/15">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-lg font-semibold">SimpleSupportINVEST (2주/2명) · FE</h3>
      <div className={'flex gap-2 items-center'}>
        <a
          className="underline text-sm"
          href="https://github.com/Shin-3117/SSAFY_Team_Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          링크
        </a>
        <span className="text-xs text-black/60 dark:text-white/60">23.11 ~ 23.11</span>
      </div>
    </div>
    <p className="mt-1 text-sm text-black/70 dark:text-white/70">투자를 위한 종합 정보 제공 사이트</p>
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
}