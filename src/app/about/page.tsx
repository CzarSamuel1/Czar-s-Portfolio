import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { Sticky } from "@/components/canvas/Sticky";
import { Capabilities } from "@/components/sections/Capabilities";

export const metadata: Metadata = {
  title: "About",
  description: "Product Designer building digital products from idea to interface.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-24">
        <section className="mx-auto max-w-4xl px-6 text-center">
          <p className="hand text-3xl">about me!</p>
          <h1 className="mt-6 text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight">
            I&rsquo;m Samuel, a product designer based in Lagos.
          </h1>
        </section>

        <section className="mx-auto mt-14 max-w-2xl px-6 pb-24">
          <Sticky tone="note" rotate={-1} className="!px-8 !py-8 md:!px-10">
            {/* PLACEHOLDER: this page is a structural draft. Replace with real,
            specific paragraphs — how you got into product design, what you
            spend your time on, what you care about. Use designing and building
            MickkyStore and DeySure as evidence of how you work. */}
            <p className="text-[var(--font-size-lg)] leading-relaxed">
              I design and build digital products end to end, from an undefined
              problem through to a shipped, structured interface. Most of my
              work sits across SaaS, business tools, and consumer products.
            </p>
            {/* PLACEHOLDER: add a paragraph on your process, and one on what you're focused on now. */}
          </Sticky>
        </section>

        <Capabilities />
      </main>
    </>
  );
}
