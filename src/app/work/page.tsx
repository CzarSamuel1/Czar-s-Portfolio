import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { ProjectFolder } from "@/components/projects/SelectedWork";
import { primaryProjects, secondaryProjects, otherProjects } from "@/types/project";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product design work — SaaS, business tools, and consumer experiences.",
};

const tones = ["var(--color-sky)", "var(--color-mustard)", "var(--color-sage)", "var(--color-rose)"];

export default function WorkIndexPage() {
  // PLACEHOLDER: hidden until isPlaceholder is false with real content
  // (Trivarse is shown as a visual showcase per the project hierarchy).
  const extras = [
    ...secondaryProjects.filter((p) => !p.isPlaceholder || p.slug === "trivarse"),
    ...otherProjects.filter((p) => !p.isPlaceholder),
  ];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-14 text-center">
          <p className="hand text-3xl">every project, one canvas</p>
          <h1 className="pixel mt-4 text-[clamp(2.5rem,8vw,5.5rem)]">All works</h1>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {primaryProjects.map((p, i) => (
            <ProjectFolder key={p.slug} project={p} tone={tones[i % tones.length]!} />
          ))}
        </div>
        {extras.length > 0 && (
          <section className="mt-24">
            <h2 className="hand mb-8 text-3xl">and a few more</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {extras.map((p) => (
                <ProjectFolder key={p.slug} project={p} tone="var(--color-sage)" />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
