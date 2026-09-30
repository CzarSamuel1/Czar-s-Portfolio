import Link from "next/link";
import { secondaryProjects, otherProjects } from "@/types/project";

export function MoreWork() {
  const projects = [...secondaryProjects, ...otherProjects].filter(
    (p) => !p.isPlaceholder || p.slug === "trivarse",
  );

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-paper-muted)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mb-10 font-[family-name:var(--font-display)] text-[var(--font-size-sm)] uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
          More Work
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-accent)]"
            >
              <span className="text-[var(--font-size-xs)] uppercase tracking-wide text-[var(--color-ink-muted)]">
                {project.category}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[var(--font-size-lg)] tracking-tight group-hover:text-[var(--color-accent)]">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
