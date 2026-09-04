import type { ReactNode } from "react";
import RepoLink from "@/components/RepoLink";

/**
 * 접히는 카드 껍데기. 헤더(제목/부제/링크/기간)는 접힌 상태에서도 보이고,
 * children은 펼쳤을 때만 보인다. 네이티브 <details>라 JS 없이 동작하며
 * 브라우저 인쇄·페이지 내 검색에서도 내용이 잡힌다.
 */
export default function CollapsibleCard({
  title,
  titleLevel = 3,
  subtitle,
  period,
  href,
  defaultOpen = false,
  children,
}: {
  title: string;
  titleLevel?: 3 | 4;
  subtitle?: string;
  period?: string;
  href?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const Title = titleLevel === 3 ? "h3" : "h4";

  return <details
    open={defaultOpen}
    className="group overflow-hidden rounded-lg border border-black/10 dark:border-white/15"
  >
    <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-2 p-4 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] [&::-webkit-details-marker]:hidden">
      <div>
        <Title className={titleLevel === 3 ? "text-lg font-semibold" : "text-base font-semibold"}>
          {title}
        </Title>
        {subtitle && (
          <p className="mt-0.5 text-sm text-black/70 dark:text-white/70">{subtitle}</p>
        )}
      </div>
      <div className={'flex gap-2 items-center'}>
        {href && <RepoLink href={href} label={title} />}
        {period && (
          <span className="font-mono text-xs tabular-nums text-black/60 dark:text-white/60">
            {period}
          </span>
        )}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-4 w-4 shrink-0 text-black/40 transition-transform group-open:rotate-180 dark:text-white/40"
        >
          <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </summary>
    <div className="border-t border-black/10 px-4 py-4 dark:border-white/15">
      {children}
    </div>
  </details>
}
