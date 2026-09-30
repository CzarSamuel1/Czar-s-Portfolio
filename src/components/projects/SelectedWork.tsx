import Image from "next/image";
import Link from "next/link";
import { primaryProjects, type Project } from "@/types/project";

export function ProjectFolder({ project, tone }: { project: Project; tone: string }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {/* Folder tab */}
      <div
        className="mono flex h-12 w-[68%] items-center gap-3 bg-[var(--color-paper-muted)] px-5 text-sm font-bold tracking-[0.14em] uppercase [clip-path:polygon(0_0,82%_0,100%_100%,0_100%)]"
      >
        <span className="size-3 rounded-full" style={{ background: tone }} aria-hidden="true" />
        {project.title}
      </div>
      <div className="bg-[var(--color-paper-muted)] p-6">
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-ink)]">
          {project.isPlaceholder ? (
            <div className="grid h-full place-items-center px-6 text-center">
              <span className="pixel text-3xl text-white/90 md:text-4xl">{project.title}</span>
            </div>
          ) : (
            <Image
              src={project.heroImage}
              alt={`${project.title} interface`}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <p className="mt-5 max-w-md text-[var(--font-size-sm)] text-[var(--color-ink-muted)]">
          {project.summary}
        </p>
        <p className="mono mt-3 text-xs tracking-[0.12em] text-[#8b8780]">
          {project.category.toUpperCase()} / {project.year}
        </p>
      </div>
    </Link>
  );
}

const panels = [
  { bg: "var(--color-sky)", fg: "var(--color-ink)", chipBg: "var(--color-ink)", chipFg: "#fff" },
  { bg: "var(--color-ink)", fg: "#fff", chipBg: "#fff", chipFg: "var(--color-ink)" },
  { bg: "var(--color-mustard)", fg: "var(--color-ink)", chipBg: "var(--color-ink)", chipFg: "#fff" },
  { bg: "var(--color-sage)", fg: "var(--color-ink)", chipBg: "var(--color-ink)", chipFg: "#fff" },
];

const handleSpots = ["-left-1.5 -top-1.5", "-right-1.5 -top-1.5", "-left-1.5 -bottom-1.5", "-right-1.5 -bottom-1.5"];

function StackPanel({ project, index, isLast }: { project: Project; index: number; isLast: boolean }) {
  const c = panels[index % panels.length]!;
  const tags = project.category.split(" / ");
  const num = String(index + 1).padStart(2, "0");

  return (
    // All panels stick at the same line; later ones slide over earlier ones,
    // and each panel's tab stays visible because the tab row is transparent.
    <article
      className="sticky top-[var(--header-h)] flex min-h-[calc(100svh-var(--header-h))] flex-col"
      style={{ "--i": index, viewTimelineName: `--p${index}` } as React.CSSProperties}
    >
      <div className="relative h-14 shrink-0">
        <div
          className="mono absolute bottom-0 left-[calc(var(--i)*25%)] flex h-full w-[23%] items-center justify-center gap-2 text-sm font-bold tracking-[0.2em] [clip-path:polygon(0_100%,14%_0,86%_0,100%_100%)] md:left-[calc(var(--i)*22%)] md:w-[17.5%]"
          style={{ background: c.bg, color: c.fg }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            <path d="M0 12V8h4V4h4V0h4v12z" />
          </svg>
          <span>
            <span className="hidden sm:inline">PROJECT </span>
            {num}
          </span>
        </div>
      </div>

      <div
        className={`grid flex-1 gap-10 px-6 py-10 shadow-[0_-14px_30px_rgba(20,19,18,0.14)] md:grid-cols-2 md:gap-16 md:px-16 md:py-14${isLast ? "" : " recede"}`}
        style={{ background: c.bg, color: c.fg, animationTimeline: isLast ? undefined : `--p${index + 1}` } as React.CSSProperties}
      >
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="mono flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase">
              <span className="size-3 rounded-full" style={{ background: c.fg }} aria-hidden="true" />
              {tags.join(" · ")}
            </p>
            <h3 className="mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-none tracking-tight">
              {project.title}
            </h3>
            <p className="mt-6 max-w-md text-[var(--font-size-lg)] leading-snug">{project.summary}</p>
            <Link
              href={`/work/${project.slug}`}
              className="mono mt-8 inline-block border-b-2 pb-1 text-sm font-bold tracking-[0.2em] uppercase"
              style={{ borderColor: c.fg }}
            >
              View project ↗
            </Link>
          </div>
          <ul className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <li
                key={t}
                className="mono px-5 pb-3 pt-4 text-xs font-bold tracking-[0.2em] uppercase [clip-path:polygon(0_0,28%_0,36%_22%,100%_22%,100%_100%,0_100%)]"
                style={{ background: c.chipBg, color: c.chipFg }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Image framed like a selected layer */}
        <div className="relative self-center">
          <div className="relative aspect-[16/10] border border-[var(--color-ink)] bg-[var(--color-ink)]">
            {project.isPlaceholder ? (
              <div className="grid h-full place-items-center px-6 text-center">
                <span className="pixel text-3xl text-white/90 md:text-5xl">{project.title}</span>
              </div>
            ) : (
              <Image
                src={project.heroImage}
                alt={`${project.title} interface`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            )}
            {handleSpots.map((pos) => (
              <span key={pos} aria-hidden="true" className={`absolute size-3 border border-[var(--color-ink)] bg-white ${pos}`} />
            ))}
          </div>
          <span className="mono absolute -top-3 right-3 bg-[var(--color-ink)] px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-white">
            {project.slug}.png
          </span>
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section>
      <div className="mb-14 px-6 text-center">
        <p className="hand text-3xl">every project, one canvas</p>
        <h2 className="pixel mt-4 text-[clamp(2.5rem,8vw,5.5rem)]">All works</h2>
      </div>
      <div style={{ timelineScope: primaryProjects.map((_, i) => `--p${i}`).join(", ") } as React.CSSProperties}>
        {primaryProjects.map((project, i) => (
          <StackPanel key={project.slug} project={project} index={i} isLast={i === primaryProjects.length - 1} />
        ))}
      </div>
    </section>
  );
}
