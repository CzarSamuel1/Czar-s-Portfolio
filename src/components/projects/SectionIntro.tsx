/** Small hand-label + mono blurb used to introduce each tier on the Work page. */
export function SectionIntro({
  eyebrow,
  blurb,
  id,
}: {
  eyebrow: string;
  blurb: string;
  id?: string;
}) {
  return (
    <div id={id} className="mx-auto max-w-6xl px-5 md:px-6">
      <h2 className="hand text-3xl">{eyebrow}</h2>
      <p className="mono mt-2 max-w-xl text-xs tracking-[0.12em] text-[#8b8780] uppercase">{blurb}</p>
    </div>
  );
}
