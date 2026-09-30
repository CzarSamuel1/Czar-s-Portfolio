/**
 * Single source of truth for portfolio projects.
 *
 * To add a project:
 *  1. Add an entry to `projects` below (pick a `section`).
 *  2. Drop real exports in /public/images/projects/<slug>/ and set isPlaceholder: false.
 *  3. Optional: add src/content/case-studies/<slug>.mdx and set hasCaseStudy: true.
 * Nothing else needs editing — pages, cards, sitemap and "up next" all read from here.
 */

/** featured = big stacked panels · more = secondary product work · brand = identity / visual */
export type ProjectSection = "featured" | "more" | "brand";

export interface Project {
  /** URL slug. Case-study MDX (if any) must be src/content/case-studies/<slug>.mdx */
  slug: string;
  title: string;
  section: ProjectSection;
  /** Shown as "A · B · C" on cards and the case-study header. Order matters. */
  tags: string[];
  /** One-line pitch shown on cards, the homepage stack and page metadata */
  summary: string;
  role: string;
  timeline: string;
  year: string;
  /** Live product URL, if publicly viewable. Omit if none. */
  liveUrl?: string;
  /** Path under /public/images/projects/<slug>/ */
  heroImage: string;
  hasCaseStudy: boolean;
  /**
   * true = no real assets yet. Featured projects still render a titled shell;
   * other sections hide placeholders in production (visible in `next dev`).
   */
  isPlaceholder: boolean;
}

export const projects: Project[] = [
  // ───────────── Featured product work ─────────────
  {
    slug: "deysure",
    title: "DeySure",
    section: "featured",
    tags: ["SaaS", "Product Design", "0→1"],
    summary:
      "Turning agreements, commitments, money and deadlines into something people can actually manage.",
    role: "Sole product designer; also built the product",
    timeline: "Ongoing",
    year: "2026",
    liveUrl: "https://www.deysure.space",
    heroImage: "/images/projects/deysure/hero.png",
    hasCaseStudy: true,
    isPlaceholder: true,
  },
  {
    slug: "mickkystore",
    title: "MickkyStore",
    section: "featured",
    tags: ["Retail Operations", "ERP", "Internal Product"],
    summary: "Designing the operational system behind a multi-branch gadget business.",
    role: "Sole product designer; also built the product",
    timeline: "~1 month (design)",
    year: "2025–2026",
    // liveUrl intentionally omitted — internal tool
    heroImage: "/images/projects/mickkystore/hero.png",
    hasCaseStudy: true,
    isPlaceholder: true,
  },
  {
    slug: "swiftbeds",
    title: "SwiftBeds / GRN Connect",
    section: "featured",
    tags: ["Hospitality", "Booking", "Consumer Product"],
    summary: "Designing a clearer path from discovering accommodation to completing a booking.",
    role: "Sole designer",
    timeline: "~2 weeks (design)",
    year: "2025",
    heroImage: "/images/projects/swiftbeds/hero.png",
    hasCaseStudy: true,
    isPlaceholder: true,
  },
  {
    slug: "letstudy-portal",
    title: "LetStudy Portal",
    section: "featured",
    tags: ["EdTech", "Product Design"],
    summary: "Designing digital learning experiences across education workflows.",
    role: "Sole designer",
    timeline: "~2 months (design)",
    year: "2025",
    heroImage: "/images/projects/letstudy-portal/hero.png",
    hasCaseStudy: true,
    isPlaceholder: true,
  },

  // ───────────── More product work ─────────────
  {
    slug: "bbarive",
    title: "Bbarive",
    section: "more",
    tags: ["Product Design"],
    summary: "TBC — write once real materials are in.",
    role: "Product Designer",
    timeline: "TBC",
    year: "2024",
    heroImage: "/images/projects/bbarive/hero.png",
    hasCaseStudy: false,
    isPlaceholder: true,
  },
  {
    slug: "emr-lifepoint",
    title: "EMR Lifepoint",
    section: "more",
    tags: ["Healthcare", "Product Design"],
    summary: "TBC — write once real materials are in.",
    role: "Designer",
    timeline: "TBC",
    year: "TBC",
    heroImage: "/images/projects/emr-lifepoint/hero.png",
    hasCaseStudy: false,
    isPlaceholder: true,
  },
  // Farmsville intentionally NOT listed — covered by an NDA. Do not add until
  // it is confirmed exactly what can be shown (see CONTENT.md).

  // ───────────── Brand & visual ─────────────
  {
    slug: "trivarse",
    title: "Trivarse",
    section: "brand",
    tags: ["Brand Identity", "Visual Design"],
    summary: "Brand identity and visual design.",
    role: "Designer",
    timeline: "TBC",
    year: "2024",
    heroImage: "/images/projects/trivarse/hero.png",
    hasCaseStudy: false,
    isPlaceholder: true,
  },
];

/** Placeholders are visible while developing, hidden in production (featured excepted). */
const showPlaceholders = process.env.NODE_ENV !== "production";
export const isVisible = (p: Project) => !p.isPlaceholder || showPlaceholders;

export const kicker = (p: Project) => p.tags.join(" · ");

export const featuredProjects = projects.filter((p) => p.section === "featured");
export const moreProjects = projects.filter((p) => p.section === "more" && isVisible(p));
export const brandProjects = projects.filter((p) => p.section === "brand" && isVisible(p));

/** Everything that may be linked to / rendered as a page right now. */
export const publicProjects = projects.filter((p) => p.section === "featured" || isVisible(p));
