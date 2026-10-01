import { Clock } from "@/components/canvas/Clock";
import { Draggable } from "@/components/canvas/Draggable";
import { Sticky, Sticker } from "@/components/canvas/Sticky";
import { SwipeRow } from "@/components/canvas/SwipeRow";
import { WordReveal } from "@/components/canvas/WordReveal";

const handles = ["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"];

const notes = [
  { tone: "sage", rotate: -4, delay: 0.7, body: <>Building <b>DeySure</b>, a Nigerian-first agreements and money tracker.</> },
  { tone: "note", rotate: 4, delay: 0.85, body: <>Designed and built <b>MickkyStore</b>, which runs three branches.</> },
] as const;

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100svh-var(--header-h))] max-w-6xl flex-col items-center px-5 pb-20 pt-10 text-center md:px-6 md:pt-14">
      <Clock />

      {/* Desktop: notes flank "my name is". Below lg they move under the name. */}
      <div className="mt-10 grid w-full items-end gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <div className="hidden justify-self-start lg:block">
          <Draggable rotate={notes[0].rotate} delay={notes[0].delay}>
            <Sticky tone={notes[0].tone} className="w-56 text-left">{notes[0].body}</Sticky>
          </Draggable>
        </div>
        <p className="hand text-3xl">
          my name is
          <span className="mx-auto mt-1 block h-[3px] w-24 rounded-full bg-[var(--color-ink)]" />
        </p>
        <div className="hidden justify-self-end lg:block">
          <Draggable rotate={notes[1].rotate} delay={notes[1].delay}>
            <Sticky tone={notes[1].tone} className="w-56 text-left">{notes[1].body}</Sticky>
          </Draggable>
        </div>
      </div>

      <h1 className="pixel relative mt-8 w-full max-w-5xl border border-[var(--color-sky)] px-3 py-5 text-[clamp(2.75rem,17vw,5rem)] md:px-8 md:py-7 md:text-[clamp(3rem,8.6vw,6.5rem)]">
        {/* Stacked on phones (Doto is wide), one line from md up */}
        <WordReveal text="Samuel Monday" delay={0.3} stagger={0.22} wordClassName="block md:inline-block" />
        {handles.map((pos) => (
          <span key={pos} aria-hidden="true" className={`absolute size-2.5 border border-[var(--color-sky)] bg-white ${pos}`} />
        ))}
      </h1>

      <p className="mono mt-10 flex items-center gap-3 text-xs font-bold tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]">
        <span className="size-3 rounded-full bg-[var(--color-sky)]" aria-hidden="true" />
        AVAILABLE FOR NEW WORK
      </p>

      <div className="mt-6 w-full lg:hidden">
        <SwipeRow>
          {notes.map((n) => (
            <Draggable key={n.tone} rotate={n.rotate} delay={n.delay} className="w-[78%] max-w-xs shrink-0 snap-center sm:w-64">
              <Sticky tone={n.tone} className="text-left">{n.body}</Sticky>
            </Draggable>
          ))}
        </SwipeRow>
      </div>

      <div className="relative mt-14 w-full max-w-3xl">
        {/* Stickers sit above the headline, then float out to its sides on wide screens */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 2xl:contents">
          <Draggable rotate={-8} delay={1} className="2xl:absolute 2xl:-left-44 2xl:top-3">
            <Sticker color="var(--color-mustard)">PRODUCT DESIGNER</Sticker>
          </Draggable>
          <Draggable rotate={6} delay={1.1} className="2xl:absolute 2xl:-right-36 2xl:-top-6">
            <Sticker color="var(--color-rose)" tail="right" className="!text-white">LAGOS · WAT</Sticker>
          </Draggable>
        </div>
        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight">
          <WordReveal text="I design digital products from idea to interface." delay={1} stagger={0.09} />
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[var(--font-size-lg)] text-[var(--color-ink-muted)]">
          <WordReveal
            text="SaaS, business tools, and consumer experiences, built around how the work actually happens."
            delay={1.7}
            stagger={0.04}
          />
        </p>
      </div>
    </section>
  );
}
