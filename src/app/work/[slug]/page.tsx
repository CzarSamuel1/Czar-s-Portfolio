import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { projects } from "@/types/project";

// Maps a project slug to its MDX case-study content.
// Add an entry here whenever a new case-study MDX file is added under
// src/content/case-studies/. Projects with hasCaseStudy: false (visual
// showcases) don't need an entry — they render metadata-only for now.
const caseStudies: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  deysure: () => import("@/content/case-studies/deysure.mdx"),
  mickkystore: () => import("@/content/case-studies/mickkystore.mdx"),
  swiftbeds: () => import("@/content/case-studies/swiftbeds.mdx"),
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const loadContent = caseStudies[slug];
  const Content = loadContent ? (await loadContent()).default : null;

  return (
    <>
      <Nav />
      <main>
        <CaseStudyHeader project={project} />
        <div className="mx-auto max-w-6xl px-6 pb-24">
          {Content ? (
            <Content />
          ) : (
            <p className="max-w-xl text-[var(--font-size-base)] text-[var(--color-ink-muted)]">
              {/* Visual-showcase projects (no full case study) land here for now. */}
              Full write-up pending — this project is represented as a
              visual showcase for now.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
