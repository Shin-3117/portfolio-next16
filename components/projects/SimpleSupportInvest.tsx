import CollapsibleCard from "@/components/CollapsibleCard";
import StackTags from "@/components/StackTags";

export default function SimpleSupportInvest() {
  return <CollapsibleCard
    title="SimpleSupportINVEST (2주/2명) · FE"
    subtitle="투자를 위한 종합 정보 제공 사이트"
    period="2023.11 ~ 2023.11"
    href="https://github.com/Shin-3117/SSAFY_Team_Project"
  >
    <div>
      <h4 className="text-sm font-medium">담당</h4>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
        <li>회원가입, 로그인 기능 구현</li>
        <li>게시글, 댓글, 대댓글 CRUD 기능 구현</li>
        <li>예/적금 금리 비교 페이지 제작</li>
        <li>은행 위치 지도 컴포넌트 제작 : 맵 마커 및 장소 정보 표시</li>
      </ul>
    </div>
    <StackTags items={["TypeScript", "vue.js"]} />
  </CollapsibleCard>
}
