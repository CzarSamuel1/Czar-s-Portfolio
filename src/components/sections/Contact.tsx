export function Contact() {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-[var(--font-size-xl)] tracking-tight">
          Have a product that needs figuring out?
        </h2>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[var(--font-size-base)]">
          {/* PLACEHOLDER contact details — replace with real email/links */}
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
      </div>
    </section>
  );
}
