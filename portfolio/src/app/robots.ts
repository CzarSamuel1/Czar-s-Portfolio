import type { MetadataRoute } from "next";

// PLACEHOLDER: keep in sync with sitemap.ts's baseUrl once the real
// production domain is decided.
const baseUrl = "https://example-replace-with-real-domain.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
