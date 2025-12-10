export default function UH() {
  return <article className="rounded-lg border border-black/10 p-5 dark:border-white/15">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-lg font-semibold">UH (6주/6명) · FE</h3>
      <div className={'flex gap-2 items-center'}>
        <a
          className="underline text-sm"
          href="https://github.com/CommitAnalyze/CoA"
          target="_blank"
          rel="noopener noreferrer"
        >
          링크
        </a>
        <span className="text-xs text-black/60 dark:text-white/60">24.01 ~ 24.02</span>
      </div>
    </div>
    <p className="mt-1 text-sm text-black/70 dark:text-white/70">WebSocket 활용 게임 사이트</p>
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
}