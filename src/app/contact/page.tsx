import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { Sticker } from "@/components/canvas/Sticky";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a product that needs figuring out?",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <Sticker color="var(--color-sky)" rotate={-4} className="mb-8">
          SAY HELLO
        </Sticker>
        <h1 className="pixel text-[clamp(2.25rem,7vw,5rem)] !leading-[1.1]">
          Have a product that needs figuring out?
        </h1>
        {/* PLACEHOLDER: a sentence or two on how you like to work / what you're open to. */}
        <p className="mx-auto mt-8 max-w-xl text-[var(--font-size-lg)] text-[var(--color-ink-muted)]">
          Get in touch and let&rsquo;s talk about it.
        </p>
        <div className="mono mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold tracking-[0.1em]">
          {/* PLACEHOLDER contact details — keep identical to the homepage Contact section. */}
          <a href="mailto:hello@example.com" className="underline underline-offset-4 hover:text-[var(--color-accent)]">
            hello@example.com
          </a>
          <a href="#" className="underline underline-offset-4 hover:text-[var(--color-accent)]">
            LinkedIn
          </a>
        </div>
      </main>
    </>
  );
}
