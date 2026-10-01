import { Draggable } from "@/components/canvas/Draggable";
import { Sticker } from "@/components/canvas/Sticky";
import { CONTACT } from "@/lib/contact";

const link = "underline underline-offset-4 hover:text-[var(--color-accent)]";

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 text-center">
      <Draggable inView rotate={-4} className="mb-8 inline-block">
        <Sticker color="var(--color-sky)">SAY HELLO</Sticker>
      </Draggable>
      <h2 className="pixel mx-auto max-w-4xl text-[clamp(2rem,6vw,4.5rem)] !leading-[1.1]">
        Have a product that needs figuring out?
      </h2>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mono mt-10 inline-block border-2 border-[var(--color-ink)] bg-[var(--color-green)] px-7 py-3.5 text-sm font-bold tracking-[0.12em] uppercase shadow-[4px_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
      >
        Chat on WhatsApp
      </a>

      <div className="mono mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold tracking-[0.08em]">
        <a href={`mailto:${CONTACT.email}`} className={link}>{CONTACT.email}</a>
        <a href={`tel:${CONTACT.phoneTel}`} className={link}>{CONTACT.phoneDisplay}</a>
        <a href={CONTACT.x} target="_blank" rel="noopener noreferrer" className={link}>X</a>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
      </div>
    </section>
  );
}
