import Image from "next/image";
import { visibleExperiments } from "@/content/experiments";

/** Lighter, tighter gallery than the case-study stack: a snap-scrolling strip. */
export function Playground() {
  if (visibleExperiments.length === 0) return null;
  return (
    <section aria-labelledby="playground-title" className="pt-8 pb-24">
      <div className="mb-10 px-6 text-center">
        <p className="hand text-3xl">made because I enjoy interfaces</p>
        <h2 id="playground-title" className="pixel mt-4 text-[clamp(2rem,6vw,4rem)]">
          Playground
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[var(--font-size-sm)] text-[var(--color-ink-muted)]">
          Standalone explorations — not shipped products.
        </p>
      </div>
      <div
        role="region"
        aria-label="Playground experiments, scrolls horizontally"
        tabIndex={0}
        className="flex snap-x snap-mandatory items-end gap-6 overflow-x-auto px-6 pb-6 md:px-[max(1.5rem,calc((100vw-72rem)/2))]"
      >
        {visibleExperiments.map((e, i) => (
          <figure
            key={e.slug}
            className="group w-[78vw] shrink-0 snap-start sm:w-[26rem]"
            style={{ transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}
          >
            <div
              className="relative overflow-hidden border border-[var(--color-ink)] bg-[var(--color-ink)] shadow-[0_10px_24px_rgba(20,19,18,0.14)]"
              style={{ aspectRatio: `${e.width} / ${e.height}` }}
            >
              {e.isPlaceholder ? (
                <div className="grid h-full place-items-center px-6 text-center">
                  <span className="pixel text-2xl text-white/90">{e.title}</span>
                </div>
              ) : (
                <Image
                  src={e.image}
                  alt={e.alt}
                  width={e.width}
                  height={e.height}
                  sizes="(min-width: 640px) 26rem, 78vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              )}
            </div>
            <figcaption className="mt-4">
              <p className="text-[var(--font-size-base)] font-semibold tracking-tight">{e.title}</p>
              <p className="mono mt-1 text-xs tracking-[0.12em] text-[#8b8780] uppercase">{e.kind}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
