import { Nav } from "@/components/navigation/Nav";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { Philosophy } from "@/components/sections/Philosophy";
import { Capabilities } from "@/components/sections/Capabilities";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { MoreWork } from "@/components/projects/MoreWork";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <Philosophy />
        <Capabilities />
        <AboutTeaser />
        <MoreWork />
        <Contact />
      </main>
    </>
  );
}
