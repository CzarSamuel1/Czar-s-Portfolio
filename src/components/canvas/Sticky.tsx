import { cn } from "@/lib/utils";

const tones = {
  note: "bg-[var(--color-note)]",
  sage: "bg-[var(--color-sage)]",
  sky: "bg-[#bfe3f3]",
} as const;

/** Tilted sticky note. Rotation is passed in degrees. */
export function Sticky({
  tone = "note",
  rotate = 0,
  className,
  children,
}: {
  tone?: keyof typeof tones;
  rotate?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "px-6 py-5 text-[var(--font-size-sm)] leading-relaxed shadow-[0_6px_14px_rgba(20,19,18,0.12)]",
        tones[tone],
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

/** Pill sticker with a pointer tail. */
export function Sticker({
  color,
  rotate = 0,
  tail = "left",
  className,
  children,
}: {
  color: string;
  rotate?: number;
  tail?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      data-tail={tail}
      className={cn(
        "sticker mono relative inline-block rounded-full px-5 py-2 text-xs font-bold tracking-[0.18em] text-[var(--color-ink)] shadow-[0_3px_0_rgba(20,19,18,0.85)]",
        className,
      )}
      style={{ background: color, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
