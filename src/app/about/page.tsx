import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";

export const metadata: Metadata = {
  title: "About",
  description: "Product Designer building digital products from idea to interface.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-[var(--font-size-2xl)] leading-[1.05] tracking-tight">
          I&rsquo;m Samuel &mdash; a product designer based in Lagos.
        </h1>

        <div className="mt-12 max-w-2xl space-y-6 text-[var(--font-size-lg)] leading-relaxed text-[var(--color-ink-muted)]">
          {/* PLACEHOLDER: this whole page is a structural draft. Replace
          with real, specific paragraphs — how you got into product design,
          what you actually spend your time on, what you care about when
          designing. Avoid generic "I'm passionate about..." language per
          your own brief; be specific instead (e.g. reference designing
          *and building* MickkyStore and DeySure as evidence of how you
          work, not just a claim). */}
          <p>
            I design and build digital products end to end &mdash; from an
            undefined problem through to a shipped, structured interface.
            Most of my work sits across SaaS, business tools, and consumer
            products.
          </p>
          {/* PLACEHOLDER: add a paragraph on your actual process/approach,
          in your own words, once you've written it. */}
          {/* PLACEHOLDER: add a paragraph on what you're doing now / currently
          focused on, once you've written it. */}
        </div>

        <section className="mt-16 max-w-2xl border-t border-[var(--color-border)] pt-8">
          <h2 className="mb-4 text-[var(--font-size-sm)] uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
            Capabilities
          </h2>
          {/* PLACEHOLDER: consider reusing the Capabilities section component
          here instead of duplicating, or link back to it on the homepage. */}
          <ul className="space-y-2 text-[var(--font-size-base)] text-[var(--color-ink-muted)]">
            <li>Product Design &mdash; UX/UI, user flows, information architecture, interaction design</li>
            <li>Systems &mdash; dashboards, complex workflows, design systems, responsive interfaces</li>
            <li>Product Thinking &mdash; feature definition, product structure, UX decisions, prototyping</li>
            <li>Collaboration &mdash; developer collaboration, design handoff, frontend understanding</li>
          </ul>
        </section>
      </main>
    </>
  );
}
