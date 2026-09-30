import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { ProjectFolder } from "@/components/projects/SelectedWork";
import { publicProjects } from "@/types/project";

// Case-study MDX is resolved by slug: src/content/case-studies/<slug>.mdx.
// A project without a matching file (or with hasCaseStudy: false) renders the
// "write-up pending" shell. Slugs are validated against `publicProjects`
// first, so the dynamic import can only ever see a known slug.
async function loadCaseStudy(slug: string): Promise<React.ComponentType | null> {
  try {
    return (await import(`@/content/case-studies/${slug}.mdx`)).default;
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  return publicProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = publicProjects.find((p) => p.slug === slug);
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
  const project = publicProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const Content = project.hasCaseStudy ? await loadCaseStudy(slug) : null;

  const i = publicProjects.findIndex((p) => p.slug === slug);
  const next = publicProjects[(i + 1) % publicProjects.length]!;

  return (
    <>
      <Nav />
      <main>
        <CaseStudyHeader project={project} />
        <div className="mx-4 mb-16 max-w-4xl bg-white px-5 py-10 lg:mx-auto shadow-[0_2px_0_var(--color-border)] md:px-14 md:py-14">
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
        {next.slug !== slug && (
          <section className="mx-auto max-w-md px-5 pb-24">
            <p className="hand mb-6 text-center text-3xl">up next</p>
            <ProjectFolder project={next} tone="var(--color-mustard)" />
          </section>
        )}
      </main>
    </>
  );
}
