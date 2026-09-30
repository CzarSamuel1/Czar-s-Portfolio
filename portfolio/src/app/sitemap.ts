import type { MetadataRoute } from "next";
import { projects } from "@/types/project";

// PLACEHOLDER: replace with the real production domain once decided,
// and keep in sync with metadataBase in layout.tsx.
const baseUrl = "https://example-replace-with-real-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.hasCaseStudy || !p.isPlaceholder)
    .map((p) => ({
      url: `${baseUrl}/work/${p.slug}`,
      changeFrequency: "monthly",
      priority: p.tier === "primary" ? 0.9 : 0.6,
    }));

  return [...staticRoutes, ...projectRoutes];
}
