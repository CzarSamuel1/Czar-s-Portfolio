"use client";

import { useState } from "react";
import { Pop } from "@/components/canvas/Pop";
import { ProjectFolder } from "@/components/projects/SelectedWork";
import type { Project } from "@/types/project";

const tones = ["var(--color-sky)", "var(--color-mustard)", "var(--color-sage)", "var(--color-rose)"];

/** Category filter styled like layer chips; folders spring in as the set changes. */
export function WorkGrid({ primary, extras }: { primary: Project[]; extras: Project[] }) {
  const all = [...primary, ...extras];
  const categories = Array.from(new Set(all.map((p) => p.category)));
  const [active, setActive] = useState<string | null>(null);
  const show = (list: Project[]) => list.filter((p) => !active || p.category === active);
  const main = show(primary);
  const more = show(extras);

  const chip = (label: string, value: string | null, color: string) => (
    <button
      key={label}
      type="button"
      aria-pressed={active === value}
      onClick={() => setActive(value)}
      className="mono border-2 border-[var(--color-ink)] px-3 py-2 text-xs font-bold tracking-[0.1em] transition-colors"
      style={active === value ? { background: color } : undefined}
    >
      {label}
    </button>
  );

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3" role="group" aria-label="Filter projects">
        {chip("All", null, "var(--color-ink)")}
        {categories.map((c, i) => chip(c, c, tones[i % tones.length]!))}
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        {main.map((p, i) => (
          <Pop key={p.slug} delay={i * 0.06}><ProjectFolder project={p} tone={tones[i % tones.length]!} /></Pop>
        ))}
      </div>
      {more.length > 0 && (
        <section className="mt-20">
          <h2 className="hand mb-8 text-3xl">and a few more</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {more.map((p, i) => (
              <Pop key={p.slug} delay={i * 0.06}><ProjectFolder project={p} tone="var(--color-sage)" /></Pop>
            ))}
          </div>
        </section>
      )}
      {main.length + more.length === 0 && <p className="text-center text-[var(--color-ink-muted)]">Nothing filed under this yet.</p>}
    </>
  );
}
