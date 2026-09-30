import { secondaryProjects, otherProjects } from "@/types/project";
import { ProjectFolder } from "./SelectedWork";

export function MoreWork() {
  const projects = [...secondaryProjects, ...otherProjects].filter(
    (p) => !p.isPlaceholder || p.slug === "trivarse",
  );
  if (projects.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <h2 className="hand mb-8 text-3xl">and a few more</h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectFolder key={p.slug} project={p} tone="var(--color-sage)" />
        ))}
      </div>
    </section>
  );
}
