import CollapsibleCard from "@/components/CollapsibleCard";
import StackTags from "@/components/StackTags";

export default function CoA() {
  return <CollapsibleCard
    title="COA (6주/6명) · FE"
    subtitle="커밋 기반 프로젝트 기여도 분석 사이트"
    period="2024.04 ~ 2024.05"
    href="https://github.com/CommitAnalyze/CoA"
  >
    <div>
      <h4 className="text-sm font-medium">담당</h4>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
        <li>깃허브, 깃랩 통합 Contribution 차트 컴포넌트 제작</li>
        <li>사용 언어 통계 차트 컴포넌트 제작</li>
        <li>사용 언어 통계 barchartrace 컴포넌트 제작</li>
        <li>프로젝트 기간 차트 컴포넌트 제작</li>
        <li>분석결과 점수 Radar 차트 컴포넌트 제작</li>
      </ul>
    </div>
    <StackTags items={["TypeScript", "Next", "D3.js", "Zustand"]} />
  </CollapsibleCard>
}
