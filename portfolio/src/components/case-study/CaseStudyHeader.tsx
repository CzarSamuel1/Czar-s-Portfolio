import type { Project } from "@/types/project";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-24">
      <p className="text-[var(--font-size-sm)] uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
        {project.category}
      </p>
      <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[var(--font-size-2xl)] leading-[1.02] tracking-tight">
        {project.title}
      </h1>
      <p className="mt-4 max-w-xl text-[var(--font-size-lg)] text-[var(--color-ink-muted)]">
        {project.summary}
      </p>
      <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 border-t border-[var(--color-border)] pt-6 text-[var(--font-size-sm)] sm:grid-cols-4">
        <div>
          <dt className="text-[var(--color-ink-muted)]">Role</dt>
          <dd className="mt-1">{project.role}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-ink-muted)]">Timeline</dt>
          <dd className="mt-1">{project.timeline}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-ink-muted)]">Year</dt>
          <dd className="mt-1">{project.year}</dd>
        </div>
        {project.liveUrl && (
          <div>
            <dt className="text-[var(--color-ink-muted)]">Live</dt>
            <dd className="mt-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[var(--color-accent)]"
              >
                Visit &rarr;
              </a>
            </dd>
          </div>
        )}
      </dl>
    </header>
  );
}
