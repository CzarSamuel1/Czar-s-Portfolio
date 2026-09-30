/**
 * Playground / experiments — standalone UI explorations, NOT case studies.
 * To add one: append an entry, drop the export in /public/images/experiments/,
 * and set width/height to the export's real pixel size (used for next/image sizing).
 */
export interface Experiment {
  slug: string;
  title: string;
  /** "Type / Framing" — keep it honest, e.g. "Fintech / Mobile UI Concept" */
  kind: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  /** true = no real export yet (visible in dev only) */
  isPlaceholder: boolean;
}

export const experiments: Experiment[] = [
  {
    slug: "cod-landing",
    title: "Call of Duty–inspired Landing Page",
    kind: "Landing Page / Visual Experiment",
    image: "/images/experiments/cod-landing.png",
    width: 1600, // PLACEHOLDER size
    height: 1000,
    alt: "Call of Duty–inspired landing page concept",
    isPlaceholder: true,
  },
  {
    slug: "crypto-app",
    title: "Crypto App",
    kind: "Fintech / Mobile UI Concept",
    image: "/images/experiments/crypto-app.png",
    width: 900, // PLACEHOLDER size
    height: 1000,
    alt: "Crypto app mobile UI concept",
    isPlaceholder: true,
  },
];

export const visibleExperiments = experiments.filter(
  (e) => !e.isPlaceholder || process.env.NODE_ENV !== "production",
);
