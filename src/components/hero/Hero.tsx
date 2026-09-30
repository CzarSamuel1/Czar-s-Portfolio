import { Clock } from "@/components/canvas/Clock";
import { Draggable } from "@/components/canvas/Draggable";
import { ScrollText } from "@/components/canvas/ScrollText";
import { Sticky, Sticker } from "@/components/canvas/Sticky";

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

      <h1 className="pixel relative mt-8 w-full max-w-5xl border border-[var(--color-sky)] px-2 py-5 text-[clamp(3rem,15vw,4.75rem)] sm:text-[clamp(2rem,8.5vw,6.5rem)] md:px-8 md:py-7">
        <span className="block sm:inline">Samuel</span> <span className="block sm:inline">Monday</span>
        {handles.map((pos) => (
          <span key={pos} aria-hidden="true" className={`absolute size-2.5 border border-[var(--color-sky)] bg-white ${pos}`} />
        ))}
      </h1>

      <p className="mono mt-10 flex items-center gap-3 text-xs font-bold tracking-[0.16em] sm:text-sm sm:tracking-[0.25em]">
        <span className="size-3 rounded-full bg-[var(--color-sky)]" aria-hidden="true" />
        AVAILABLE FOR NEW WORK
      </p>

      <div className="mt-10 flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-center lg:hidden">
        {notes.map((n) => (
          <Draggable key={n.tone} rotate={n.rotate} delay={n.delay}>
            <Sticky tone={n.tone} className="w-[min(16rem,100%)] text-left">{n.body}</Sticky>
          </Draggable>
        ))}
      </div>

      <div className="relative mt-14 w-full max-w-3xl">
        {/* Stickers sit above the headline, then float out to its sides on wide screens */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 xl:contents">
          <Draggable rotate={-8} delay={1} className="xl:absolute xl:-left-44 xl:top-3">
            <Sticker color="var(--color-mustard)">PRODUCT DESIGNER</Sticker>
          </Draggable>
          <Draggable rotate={6} delay={1.1} className="xl:absolute xl:-right-36 xl:-top-6">
            <Sticker color="var(--color-rose)" tail="right" className="!text-white">LAGOS · WAT</Sticker>
          </Draggable>
        </div>
        <ScrollText
          as="h2"
          text="I design digital products from idea to interface."
          offset={["start 0.98", "end 0.6"]}
          className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight"
        />
        <ScrollText
          text="SaaS, business tools, and consumer experiences, built around how the work actually happens."
          offset={["start 0.98", "end 0.65"]}
          className="mx-auto mt-6 max-w-xl text-[var(--font-size-lg)] text-[var(--color-ink-muted)]"
        />
      </div>
    </section>
  );
}
