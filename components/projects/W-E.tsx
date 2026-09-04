import CollapsibleCard from "@/components/CollapsibleCard";

export default function W_E() {
  return <CollapsibleCard
    title="W-E (6주/6명) · FE"
    subtitle="10대 청소년을 위한 금융 관리 앱"
    period="2024.02 ~ 2024.04"
    href="https://github.com/TeamAquaDan/W-E"
  >
    <div>
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
  </CollapsibleCard>
}
