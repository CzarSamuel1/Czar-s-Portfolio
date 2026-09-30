import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a product that needs figuring out?",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-[var(--font-size-2xl)] tracking-tight">
          Have a product that needs figuring out?
        </h1>
        <p className="mt-6 max-w-xl text-[var(--font-size-lg)] leading-relaxed text-[var(--color-ink-muted)]">
          {/* PLACEHOLDER: a sentence or two on how you like to work / what
          kind of projects or conversations you're open to. */}
          Get in touch and let&rsquo;s talk about it.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[var(--font-size-lg)]">
          {/* PLACEHOLDER contact details — replace with your real email/links.
          Kept identical to the homepage Contact section on purpose. */}
          <a
            href="mailto:hello@example.com"
            className="underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            hello@example.com
          </a>
          <a
            href="#"
            className="underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </>
  );
}
