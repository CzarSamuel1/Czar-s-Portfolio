import { Draggable } from "@/components/canvas/Draggable";
import { Sticker } from "@/components/canvas/Sticky";

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 text-center">
      <Draggable inView rotate={-4} className="mb-8 inline-block">
        <Sticker color="var(--color-sky)">SAY HELLO</Sticker>
      </Draggable>
      <h2 className="pixel mx-auto max-w-4xl text-[clamp(2rem,6vw,4.5rem)] !leading-[1.1]">
        Have a product that needs figuring out?
      </h2>
      <div className="mono mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold tracking-[0.1em]">
        {/* PLACEHOLDER contact details — replace with real email/links */}
        <a href="mailto:hello@example.com" className="underline underline-offset-4 hover:text-[var(--color-accent)]">
          hello@example.com
        </a>
        <a href="#" className="underline underline-offset-4 hover:text-[var(--color-accent)]">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
