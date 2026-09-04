import CollapsibleCard from "@/components/CollapsibleCard";
import StackTags from "@/components/StackTags";

export default function UH() {
  return <CollapsibleCard
    title="UH (6주/6명) · FE"
    subtitle="WebSocket 활용 게임 사이트"
    period="2024.01 ~ 2024.02"
    href="https://github.com/Shin-3117/UH"
  >
    <div>
      <h4 className="text-sm font-medium">담당</h4>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
        <li>화상 통신 기능 구현: WebRTC session 생성 및 수정을 서버 측과 통신하여 기능 구현</li>
        <li>대기방 채팅 기능 구현</li>
        <li>게임 기능 구현</li>
      </ul>
    </div>
    <StackTags items={["JavaScript", "React", "WebSocket", "WebRTC"]} />
  </CollapsibleCard>
}
