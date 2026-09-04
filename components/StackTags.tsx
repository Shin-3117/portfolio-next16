/**
 * 기술 스택을 칩으로 표시. 쉼표 나열보다 스캔이 빨라 채용 담당자가
 * 가장 먼저 찾는 정보를 빠르게 훑을 수 있다.
 */
export default function StackTags({
  items,
  label = "기술",
  className = "mt-3",
}: {
  items: string[];
  label?: string;
  className?: string;
}) {
  return <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
    <span className="mr-0.5 text-sm font-medium">{label}</span>
    {items.map((item) => (
      <span
        key={item}
        className="rounded-full border border-black/15 px-2 py-0.5 text-xs text-black/70 dark:border-white/25 dark:text-white/70"
      >
        {item}
      </span>
    ))}
  </div>
}
