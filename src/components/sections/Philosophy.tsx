import { Sticky } from "@/components/canvas/Sticky";

export function Philosophy() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <Sticky tone="note" rotate={-1.5} className="mx-auto max-w-2xl !px-8 !py-8 md:!px-12 md:!py-10">
        <p className="text-[clamp(1.25rem,2.4vw,1.75rem)] leading-snug tracking-tight">
          I don&rsquo;t start with visual decoration. I start by understanding
          the problem, structuring the information, designing the experience,
          then refining the interface.
        </p>
        <p className="hand mt-5 text-2xl">complexity, then structure, then clarity</p>
      </Sticky>
    </section>
  );
}
