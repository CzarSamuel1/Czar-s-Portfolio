const capabilities = [
  {
    title: "Product Design",
    description: "UX/UI, user flows, information architecture, interaction design.",
  },
  {
    title: "Systems",
    description: "Dashboards, complex workflows, design systems, responsive interfaces.",
  },
  {
    title: "Product Thinking",
    description: "Feature definition, product structure, UX decisions, prototyping.",
  },
  {
    title: "Collaboration",
    description: "Developer collaboration, design handoff, frontend understanding.",
  },
];

export function Capabilities() {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mb-12 font-[family-name:var(--font-display)] text-[var(--font-size-sm)] uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
          Capabilities
        </h2>
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
          {capabilities.map((capability) => (
            <div key={capability.title}>
              <h3 className="font-[family-name:var(--font-display)] text-[var(--font-size-lg)] tracking-tight">
                {capability.title}
              </h3>
              <p className="mt-2 text-[var(--font-size-base)] text-[var(--color-ink-muted)]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
