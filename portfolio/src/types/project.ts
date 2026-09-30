export type ProjectTier = "primary" | "secondary" | "other";

export type ProjectCategory =
  | "SaaS / Productivity"
  | "Retail / ERP"
  | "Booking / Hospitality"
  | "EdTech"
  | "Brand / Visual Identity"
  | "Healthcare";

export interface Project {
  /** URL slug — must match the MDX filename in content/case-studies/ for primary/secondary tiers */
  slug: string;
  title: string;
  category: ProjectCategory;
  tier: ProjectTier;
  /** One-line description, shown on homepage + work index */
  summary: string;
  role: string;
  timeline: string;
  /** Year or year range shown in listings */
  year: string;
  /** Live product URL, if publicly viewable. Omit if none. */
  liveUrl?: string;
  /** Path under /public/images/projects/[slug]/ — PLACEHOLDER until real exports are dropped in */
  heroImage: string;
  /** Whether this project has a full MDX case study vs. just metadata (visual showcase) */
  hasCaseStudy: boolean;
  /** Set true only once real assets are in place — lets us build the shell before content lands */
  isPlaceholder: boolean;
}

export const projects: Project[] = [
  {
    slug: "deysure",
    title: "DeySure",
    category: "SaaS / Productivity",
    tier: "primary",
    summary:
      "A Nigerian-first record-keeping app for agreements, invoices, reminders, and documents.",
    role: "Sole product designer; also built the product",
    timeline: "Ongoing",
    year: "2026",
    liveUrl: "https://www.deysure.space",
    heroImage: "/images/projects/deysure/hero.png", // PLACEHOLDER — replace with real export
    hasCaseStudy: true,
    isPlaceholder: true,
  },
  {
    slug: "mickkystore",
    title: "MickkyStore",
    category: "Retail / ERP",
    tier: "primary",
    summary:
      "Multi-branch retail operations software — inventory, POS, repairs, staff, and payroll in one system.",
    role: "Sole product designer; also built the product",
    timeline: "~1 month (design)",
    year: "2025–2026",
    // liveUrl intentionally omitted — internal tool, confirm before adding
    heroImage: "/images/projects/mickkystore/hero.png", // PLACEHOLDER
    hasCaseStudy: true,
    isPlaceholder: true,
  },
  {
    slug: "swiftbeds",
    title: "SwiftBeds / GRN Connect",
    category: "Booking / Hospitality",
    tier: "primary",
    summary:
      "A hotel and travel booking platform — discovery, booking, payment, and account management.",
    role: "Sole designer",
    timeline: "~2 weeks (design)",
    year: "2025",
    heroImage: "/images/projects/swiftbeds/hero.png", // PLACEHOLDER
    hasCaseStudy: true,
    isPlaceholder: true,
  },
  {
    slug: "letstudy-portal",
    title: "LetStudy Portal",
    category: "EdTech",
    tier: "primary",
    summary:
      "A study-abroad platform connecting students to verified schools and programs.",
    role: "Sole designer",
    timeline: "~2 months (design)",
    year: "2025",
    heroImage: "/images/projects/letstudy-portal/hero.png", // PLACEHOLDER
    hasCaseStudy: true,
    isPlaceholder: true,
  },
  {
    slug: "trivarse",
    title: "Trivarse",
    category: "Brand / Visual Identity",
    tier: "secondary",
    summary: "Brand and visual identity work — presented as visual design, not a product case study.",
    role: "Designer",
    timeline: "TBC",
    year: "2024",
    heroImage: "/images/projects/trivarse/hero.png", // PLACEHOLDER
    hasCaseStudy: false,
    isPlaceholder: true,
  },
  {
    slug: "bbarive",
    title: "Bbarive",
    category: "SaaS / Productivity",
    tier: "secondary",
    summary: "PLACEHOLDER — include only once enough material exists to represent it fairly.",
    role: "Product Designer",
    timeline: "2024",
    year: "2024",
    heroImage: "/images/projects/bbarive/hero.png", // PLACEHOLDER
    hasCaseStudy: false,
    isPlaceholder: true,
  },
  {
    slug: "emr-lifepoint",
    title: "EMR Lifepoint",
    category: "Healthcare",
    tier: "other",
    summary: "PLACEHOLDER — represented compactly under Other Work, pending assets.",
    role: "Designer",
    timeline: "TBC",
    year: "TBC",
    heroImage: "/images/projects/emr-lifepoint/hero.png", // PLACEHOLDER
    hasCaseStudy: false,
    isPlaceholder: true,
  },
  // Farmsville intentionally excluded — NDA. Do not add without explicit
  // confirmation of what is safe to display.
];

export const primaryProjects = projects.filter((p) => p.tier === "primary");
export const secondaryProjects = projects.filter((p) => p.tier === "secondary");
export const otherProjects = projects.filter((p) => p.tier === "other");
