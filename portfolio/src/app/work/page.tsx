import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import {
  primaryProjects,
  secondaryProjects,
  otherProjects,
} from "@/types/project";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product design work — SaaS, business tools, and consumer experiences.",
};

function ProjectRow({
  project,
  index,
}: {
  project: (typeof primaryProjects)[number];
  index?: number;
}) {
  return (
    <li className="group border-b border-[var(--color-border)] py-8 first:border-t">
      <Link
        href={`/work/${project.slug}`}
        className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between"
      >
        <div className="flex items-baseline gap-6">
          {index !== undefined && (
            <span className="font-[family-name:var(--font-display)] text-[var(--font-size-sm)] text-[var(--color-ink-muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="font-[family-name:var(--font-display)] text-[var(--font-size-lg)] tracking-tight transition-colors group-hover:text-[var(--color-accent)]">
            {project.title}
          </span>
        </div>
        <div className="flex items-baseline gap-4 pl-12 text-[var(--font-size-sm)] text-[var(--color-ink-muted)] md:pl-0">
          <span>{project.category}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{project.year}</span>
        </div>
      </Link>
    </li>
  );
}

export default function WorkIndexPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1 className="font-[family-name:var(--font-display)] text-[var(--font-size-2xl)] tracking-tight">
          Work
        </h1>

        <section className="mt-16">
          <h2 className="mb-4 text-[var(--font-size-sm)] uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
            Case Studies
          </h2>
          <ul>
            {primaryProjects.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </ul>
        </section>

        {secondaryProjects.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-4 text-[var(--font-size-sm)] uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
              Secondary Work
            </h2>
            <ul>
              {secondaryProjects
                .filter((p) => !p.isPlaceholder || p.slug === "trivarse")
                .map((project) => (
                  <ProjectRow key={project.slug} project={project} />
                ))}
            </ul>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-4 text-[var(--font-size-sm)] uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
              Other Work
            </h2>
            {/* PLACEHOLDER: Other Work items (e.g. EMR Lifepoint) are hidden
            until isPlaceholder is set to false with real content — remove
            this filter once ready, or render a compact text-only mention
            instead of a full row. */}
            <ul>
              {otherProjects
                .filter((p) => !p.isPlaceholder)
                .map((project) => (
                  <ProjectRow key={project.slug} project={project} />
                ))}
            </ul>
            {otherProjects.every((p) => p.isPlaceholder) && (
              <p className="text-[var(--font-size-sm)] text-[var(--color-ink-muted)]">
                More work coming soon.
              </p>
            )}
          </section>
        )}
      </main>
    </>
  );
}
