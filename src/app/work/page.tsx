import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { SelectedWork, ProjectFolder } from "@/components/projects/SelectedWork";
import { SectionIntro } from "@/components/projects/SectionIntro";
import { Playground } from "@/components/projects/Playground";
import { Pop } from "@/components/canvas/Pop";
import { moreProjects, brandProjects } from "@/types/project";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product design across SaaS, retail operations, hospitality and education — plus brand work and interface experiments.",
};

function FolderGrid({ items, tone }: { items: typeof moreProjects; tone: string }) {
  return (
    <div className="mx-auto mt-8 grid max-w-6xl gap-10 px-5 sm:grid-cols-2 md:grid-cols-3 md:px-6">
      {items.map((p, i) => (
        <Pop key={p.slug} delay={i * 0.06}>
          <ProjectFolder project={p} tone={tone} />
        </Pop>
      ))}
    </div>
  );
}

export default function WorkIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="px-5 py-12 text-center md:py-24">
          <p className="hand text-3xl">every project, one canvas</p>
          <h1 className="pixel mt-4 text-[clamp(2.5rem,8vw,5.5rem)]">All works</h1>
        </div>

        {/* 1 · Featured — the serious product work, most space */}
        <SelectedWork showHeading={false} />

        {/* 2 · More product work */}
        {moreProjects.length > 0 && (
          <section className="pt-24">
            <SectionIntro eyebrow="more product work" blurb="Smaller or earlier product projects" />
            <FolderGrid items={moreProjects} tone="var(--color-sage)" />
          </section>
        )}

        {/* 3 · Brand & visual */}
        {brandProjects.length > 0 && (
          <section className="pt-24">
            <SectionIntro eyebrow="brand & visual" blurb="Identity and visual design" />
            <FolderGrid items={brandProjects} tone="var(--color-mustard)" />
          </section>
        )}

        {/* 4 · Playground — deliberately lighter */}
        <div className="pt-24">
          <Playground />
        </div>
      </main>
    </>
  );
}
