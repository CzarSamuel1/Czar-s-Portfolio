import Link from "next/link";
import { Draggable } from "@/components/canvas/Draggable";
import { Pop } from "@/components/canvas/Pop";
import { ScrollText } from "@/components/canvas/ScrollText";
import { Sticky } from "@/components/canvas/Sticky";

const corners = ["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"];

function Diamonds({ bg }: { bg: string }) {
  return (
    <span className="grid size-12 place-items-center border-2 border-dashed border-[var(--color-ink)] md:size-14" style={{ background: bg }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="var(--color-ink)">
        <path d="M12 1l5 5-5 5-5-5zM6 7l5 5-5 5-5-5zM18 7l5 5-5 5-5-5zM12 13l5 5-5 5-5-5z" />
      </svg>
    </span>
  );
}

function Tag({ bg, fg = "var(--color-ink)", delay, children }: { bg: string; fg?: string; delay: number; children: React.ReactNode }) {
  return (
    <Pop delay={delay}>
      <span
        className="inline-block px-4 py-2.5 text-[clamp(1.05rem,2.6vw,1.75rem)] font-semibold tracking-tight transition-transform duration-200 hover:-rotate-2 hover:scale-105 md:px-6 md:py-3"
        style={{ background: bg, color: fg }}
      >
        {children}
      </span>
    </Pop>
  );
}

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-28 text-center md:px-6">
      <p className="hand text-3xl">about me!</p>

      <span className="relative mt-6 inline-block border border-[var(--color-ink)] bg-white px-7 py-2 text-xl md:text-2xl">
        hi there
        {corners.map((pos) => (
          <span key={pos} aria-hidden="true" className={`absolute size-2.5 border border-[var(--color-ink)] bg-white ${pos}`} />
        ))}
      </span>

      {/* PLACEHOLDER copy — draft from what you've told me; edit to your own voice */}
      <ScrollText
        text="I'm Samuel, a product designer in Lagos who maps how a business really runs, then designs and builds the software around it."
        className="mx-auto mt-10 max-w-4xl text-[clamp(1.6rem,4.2vw,3.1rem)] font-semibold leading-[1.12] tracking-tight"
      />

      <div className="mt-14 grid items-start gap-8 md:grid-cols-2">
        <Draggable inView rotate={-2.5} className="mx-auto w-full max-w-sm">
          <Sticky tone="note" className="text-left">
            Right now: designing and building <b>DeySure</b>, a Nigerian-first app for agreements, invoices, and reminders.
          </Sticky>
        </Draggable>
        <Draggable inView rotate={2} delay={0.12} className="mx-auto w-full max-w-sm">
          <Sticky tone="sage" className="text-left">
            Also: I run <b>MickkyStore</b>, a phone retail and repair business, and built the software behind its three branches.
          </Sticky>
        </Draggable>
      </div>

      <div className="mt-14 flex flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Tag bg="var(--color-mustard)" delay={0}>Retail &amp; ERP</Tag>
          <Pop delay={0.08}><Diamonds bg="var(--color-mustard)" /></Pop>
          <Tag bg="var(--color-green)" delay={0.16}>Booking &amp; hospitality</Tag>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Tag bg="var(--color-rose)" fg="#fff" delay={0.1}>EdTech</Tag>
          <Pop delay={0.18}><Diamonds bg="var(--color-rose)" /></Pop>
          <Tag bg="var(--color-sky)" delay={0.26}>Agreements &amp; money</Tag>
        </div>
      </div>

      <Link
        href="/about"
        className="mono mt-12 inline-block border-2 border-[var(--color-ink)] px-5 py-2.5 text-sm font-bold tracking-[0.12em] uppercase transition-colors hover:bg-[var(--color-ink)] hover:text-white"
      >
        More about me
      </Link>
    </section>
  );
}
