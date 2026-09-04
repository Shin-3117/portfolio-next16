import type { CareerProject } from "@/data/careerProjects";
import CollapsibleCard from "@/components/CollapsibleCard";

export default function CareerProjectCard({
  project,
  defaultOpen = false,
}: {
  project: CareerProject;
  defaultOpen?: boolean;
}) {
  return <CollapsibleCard
    title={project.title}
    titleLevel={4}
    subtitle={project.client}
    period={project.period}
    defaultOpen={defaultOpen}
  >
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
  </CollapsibleCard>
}
