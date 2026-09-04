import type { CareerProject } from "@/data/careerProjects";

export default function CareerProjectCard({
  project,
  defaultOpen = false,
}: {
  project: CareerProject;
  defaultOpen?: boolean;
}) {
  return <details
    open={defaultOpen}
    className="group overflow-hidden rounded-lg border border-black/10 dark:border-white/15"
  >
    <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-2 p-4 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] [&::-webkit-details-marker]:hidden">
      <div>
        <h4 className="text-base font-semibold">{project.title}</h4>
        <p className="mt-0.5 text-xs text-black/60 dark:text-white/60">{project.client}</p>
      </div>
      <div className={'flex gap-2 items-center'}>
        <span className="text-xs text-black/60 dark:text-white/60">{project.period}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-4 w-4 text-black/40 transition-transform group-open:rotate-180 dark:text-white/40"
        >
          <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </summary>
    <div className="border-t border-black/10 px-4 py-4 dark:border-white/15">
      <p className="text-sm text-black/70 dark:text-white/70">{project.summary}</p>
      <div className="mt-3">
        <h5 className="text-sm font-medium">담당</h5>
        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
          {project.tasks.map((task) => (
            <li key={task.label}>
              <span className="font-medium">{task.label}</span>: {task.detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <h5 className="text-sm font-medium">성과</h5>
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">{project.result}</p>
      </div>
      <p className="mt-3 text-sm text-black/70 dark:text-white/70">
        <span className="font-medium">기술</span>: {project.stack.join(", ")}
      </p>
    </div>
  </details>
}
