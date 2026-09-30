import { Pop } from "@/components/canvas/Pop";

// A real sequence (matches the homepage philosophy line), drawn like a design-tool user flow.
const steps = [
  { name: "understand", title: "Understand the problem", body: "Map how the work really happens before any screen exists.", bg: "var(--color-mustard)", fg: "var(--color-ink)" },
  { name: "structure", title: "Structure the information", body: "Decide what belongs where, and what comes first.", bg: "var(--color-green)", fg: "var(--color-ink)" },
  { name: "design", title: "Design the experience", body: "Flows and states built around real tasks.", bg: "var(--color-rose)", fg: "#fff" },
  { name: "refine", title: "Refine the interface", body: "Type, spacing and detail come last.", bg: "var(--color-sky)", fg: "var(--color-ink)" },
];

export function HowIWork() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 md:px-6">
      <h2 className="hand mb-10 text-center text-3xl">how I work</h2>
      <ol className="flex flex-col items-stretch md:flex-row md:items-stretch">
        {steps.map((s, i) => (
          <li key={s.name} className="flex flex-1 flex-col items-center md:flex-row">
            <Pop delay={i * 0.1} className="w-full flex-1 self-stretch">
              <div className="h-full bg-white p-5 shadow-[0_2px_0_var(--color-border)]">
                <span className="mono inline-block px-3 py-1.5 text-xs font-bold tracking-[0.12em]" style={{ background: s.bg, color: s.fg }}>
                  {s.name}
                </span>
                <h3 className="mt-4 text-[var(--font-size-lg)] font-semibold leading-tight tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[var(--font-size-sm)] text-[var(--color-ink-muted)]">{s.body}</p>
              </div>
            </Pop>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="block h-8 border-l-2 border-dashed border-[var(--color-ink)] md:h-0 md:w-8 md:shrink-0 md:border-l-0 md:border-t-2" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
