import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { Clock } from "@/components/canvas/Clock";
import { Draggable } from "@/components/canvas/Draggable";
import { Sticky, Sticker } from "@/components/canvas/Sticky";
import { CopyEmail } from "@/components/pages/CopyEmail";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a product that needs figuring out?",
};

// PLACEHOLDER contact details — keep identical to the homepage Contact section.
const EMAIL = "hello@example.com";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-5 py-14 text-center md:px-6 md:py-24">
        <Draggable rotate={-4} className="mb-8 inline-block"><Sticker color="var(--color-sky)">SAY HELLO</Sticker></Draggable>
        <h1 className="pixel text-[clamp(1.9rem,7vw,5rem)] !leading-[1.1]">Have a product that needs figuring out?</h1>
        {/* PLACEHOLDER: a sentence or two on how you like to work. */}
        <p className="mx-auto mt-8 max-w-xl text-[var(--font-size-lg)] text-[var(--color-ink-muted)]">
          Tell me what you&rsquo;re building, who it&rsquo;s for, and where it&rsquo;s stuck.
        </p>
        <p className="mono mt-8 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.16em] sm:text-sm">
          <span className="size-3 rounded-full bg-[var(--color-sky)]" aria-hidden="true" />
          AVAILABLE FOR NEW WORK
        </p>
        <div className="mt-3"><Clock /></div>

        <div className="mt-14 grid items-start gap-8 text-left sm:grid-cols-2">
          <Draggable inView rotate={-2.5} className="mx-auto w-full max-w-sm">
            <Sticky tone="note">
              <p className="mono text-xs font-bold tracking-[0.14em]">EMAIL</p>
              <a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-[var(--font-size-lg)] font-semibold underline underline-offset-4 hover:text-[var(--color-accent)]">{EMAIL}</a>
              <CopyEmail email={EMAIL} />
            </Sticky>
          </Draggable>
          <Draggable inView rotate={2} delay={0.12} className="mx-auto w-full max-w-sm">
            <Sticky tone="sage">
              <p className="mono text-xs font-bold tracking-[0.14em]">LINKEDIN</p>
              <a href="#" className="mt-2 block text-[var(--font-size-lg)] font-semibold underline underline-offset-4 hover:text-[var(--color-accent)]">Send a message</a>
              <p className="mt-4 text-[var(--font-size-sm)]">Same inbox, different door.</p>
            </Sticky>
          </Draggable>
        </div>
      </main>
    </>
  );
}
