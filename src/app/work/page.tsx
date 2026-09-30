import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { WorkGrid } from "@/components/pages/WorkGrid";
import { primaryProjects, secondaryProjects, otherProjects } from "@/types/project";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product design work — SaaS, business tools, and consumer experiences.",
};

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
      <main className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-24">
        <div className="mb-14 text-center">
          <p className="hand text-3xl">every project, one canvas</p>
          <h1 className="pixel mt-4 text-[clamp(2.5rem,8vw,5.5rem)]">All works</h1>
        </div>
        <WorkGrid primary={primaryProjects} extras={extras} />
      </main>
    </>
  );
}
