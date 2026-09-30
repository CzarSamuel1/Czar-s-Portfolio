import { moreProjects, brandProjects } from "@/types/project";
import { ProjectFolder } from "./SelectedWork";

/** Homepage strip: secondary product work + brand work, folder cards. */
export function MoreWork() {
  const projects = [...moreProjects, ...brandProjects];
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
