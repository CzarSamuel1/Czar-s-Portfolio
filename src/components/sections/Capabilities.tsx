const capabilities = [
  { title: "Product Design", color: "var(--color-mustard)", description: "UX/UI, user flows, information architecture, interaction design." },
  { title: "Systems", color: "var(--color-green)", description: "Dashboards, complex workflows, design systems, responsive interfaces." },
  { title: "Product Thinking", color: "var(--color-rose)", description: "Feature definition, product structure, UX decisions, prototyping." },
  { title: "Collaboration", color: "var(--color-sky)", description: "Developer collaboration, design handoff, frontend understanding." },
];

export function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <h2 className="hand mb-10 text-center text-3xl">what I do</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {capabilities.map((c) => (
          <div key={c.title} className="bg-white p-6 shadow-[0_2px_0_var(--color-border)]">
            <h3
              className="inline-block px-4 py-2 text-[var(--font-size-lg)] font-semibold tracking-tight text-[var(--color-ink)]"
              style={{ background: c.color }}
            >
              {c.title}
            </h3>
            <p className="mt-4 text-[var(--font-size-base)] text-[var(--color-ink-muted)]">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
