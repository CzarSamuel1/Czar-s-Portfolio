import { Sticker } from "@/components/canvas/Sticky";
import type { Project } from "@/types/project";

export function CaseStudyHeader({ project }: { project: Project }) {
  const meta = [
    { label: "Role", value: project.role, bg: "var(--color-note)" },
    { label: "Timeline", value: project.timeline, bg: "var(--color-sage)" },
    { label: "Year", value: project.year, bg: "#bfe3f3" },
  ];
  return (
    <header className="mx-auto max-w-4xl px-6 pb-14 pt-14 text-center md:pt-20">
      <Sticker color="var(--color-mustard)" rotate={-4}>
        {project.category.toUpperCase()}
      </Sticker>
      <h1 className="pixel mt-8 text-[clamp(2.5rem,9vw,6rem)] !leading-[1.05]">{project.title}</h1>
      <p className="mx-auto mt-6 max-w-xl text-[var(--font-size-lg)] text-[var(--color-ink-muted)]">
        {project.summary}
      </p>
      <dl className="mt-10 flex flex-wrap justify-center gap-4">
        {meta.map((m, i) => (
          <div
            key={m.label}
            className="min-w-40 px-5 py-4 text-left shadow-[0_6px_14px_rgba(20,19,18,0.12)]"
            style={{ background: m.bg, transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
          >
            <dt className="mono text-[11px] font-bold tracking-[0.18em] uppercase">{m.label}</dt>
            <dd className="mt-1 text-[var(--font-size-sm)]">{m.value}</dd>
          </div>
        ))}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mono grid place-items-center border-2 border-[var(--color-ink)] px-5 py-4 text-sm font-bold tracking-[0.12em] uppercase transition-colors hover:bg-[var(--color-ink)] hover:text-white"
          >
            Visit live ↗
          </a>
        )}
      </dl>
    </header>
  );
}
