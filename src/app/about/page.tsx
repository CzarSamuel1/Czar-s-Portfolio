import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { Clock } from "@/components/canvas/Clock";
import { Draggable } from "@/components/canvas/Draggable";
import { ScrollText } from "@/components/canvas/ScrollText";
import { Sticky, Sticker } from "@/components/canvas/Sticky";
import { Capabilities } from "@/components/sections/Capabilities";
import { HowIWork } from "@/components/pages/HowIWork";

export const metadata: Metadata = {
  title: "About",
  description: "Product Designer building digital products from idea to interface.",
};

const corners = ["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-12 md:pt-20">
        <section className="mx-auto max-w-4xl px-5 text-center md:px-6">
          <Clock />
          <p className="hand mt-8 text-3xl">about me!</p>
          <span className="relative mt-6 inline-block border border-[var(--color-ink)] bg-white px-7 py-2 text-xl md:text-2xl">
            hi there
            {corners.map((pos) => (
              <span key={pos} aria-hidden="true" className={`absolute size-2.5 border border-[var(--color-ink)] bg-white ${pos}`} />
            ))}
          </span>
          <ScrollText
            as="h1"
            text="I'm Samuel, a product designer based in Lagos."
            offset={["start 0.98", "end 0.55"]}
            className="mt-10 text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Draggable rotate={-6} delay={0.4}><Sticker color="var(--color-mustard)">PRODUCT DESIGNER</Sticker></Draggable>
            <Draggable rotate={5} delay={0.5}><Sticker color="var(--color-rose)" tail="right" className="!text-white">LAGOS · WAT</Sticker></Draggable>
          </div>
        </section>

        <section className="mx-auto mt-14 grid max-w-4xl items-start gap-8 px-5 pb-24 md:grid-cols-[1.4fr_1fr] md:px-6">
          <Draggable inView rotate={-1.2}>
            <Sticky tone="note" className="!px-7 !py-7 md:!px-9">
              {/* PLACEHOLDER: replace with your own paragraphs — how you got into product design, what you care about. */}
              <p className="text-[var(--font-size-lg)] leading-relaxed">
                I design and build digital products end to end, from an undefined problem through to a shipped, structured interface. Most of my work sits across SaaS, business tools, and consumer products.
              </p>
            </Sticky>
          </Draggable>
          <div className="flex flex-col gap-6">
            <Draggable inView rotate={2.5} delay={0.1}>
              <Sticky tone="sage">Right now: designing and building <b>DeySure</b>.</Sticky>
            </Draggable>
            <Draggable inView rotate={-2} delay={0.2}>
              <Sticky tone="sky">Also running <b>MickkyStore</b>, and built the software behind its three branches.</Sticky>
            </Draggable>
          </div>
        </section>

        <HowIWork />
        <Capabilities />
      </main>
    </>
  );
}
