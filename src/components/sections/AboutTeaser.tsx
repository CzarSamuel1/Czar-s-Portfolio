import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* PLACEHOLDER copy — replace with real bio once About page content is written */}
          <p className="text-[var(--font-size-lg)] leading-relaxed">
            I&rsquo;m Samuel &mdash; a product designer based in Lagos. I
            build and design software end to end: from an undefined problem
            to a shipped, structured interface.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-[var(--font-size-sm)] underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            More about me &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
