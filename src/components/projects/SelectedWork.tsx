import Link from "next/link";
import { primaryProjects } from "@/types/project";

export function SelectedWork() {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mb-12 font-[family-name:var(--font-display)] text-[var(--font-size-sm)] uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
          Selected Work
        </h2>
        <ul className="flex flex-col">
          {primaryProjects.map((project, index) => (
            <li
              key={project.slug}
              className="group border-b border-[var(--color-border)] py-10 first:border-t md:py-14"
            >
              <Link
                href={`/work/${project.slug}`}
                className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-[family-name:var(--font-display)] text-[var(--font-size-sm)] text-[var(--color-ink-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[var(--font-size-xl)] tracking-tight transition-colors group-hover:text-[var(--color-accent)]">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-baseline gap-4 pl-12 text-[var(--font-size-sm)] text-[var(--color-ink-muted)] md:pl-0">
                  <span>{project.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{project.year}</span>
                </div>
              </Link>
              <p className="mt-3 max-w-xl pl-12 text-[var(--font-size-base)] text-[var(--color-ink-muted)] md:pl-12">
                {project.summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
