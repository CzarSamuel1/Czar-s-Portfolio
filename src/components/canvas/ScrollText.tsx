"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.26em] inline-block">
      {word}
    </motion.span>
  );
}

type Offset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

/** A statement that "reads in" word by word as you scroll past it. */
export function ScrollText({
  text,
  className,
  as = "p",
  offset = ["start 0.85", "end 0.45"],
}: {
  text: string;
  className?: string;
  as?: "p" | "h1" | "h2";
  /** Scroll window the reveal plays over. Tighten it for text that starts near the fold. */
  offset?: Offset;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const words = text.split(" ");
  const Tag = as as "p";

  if (reduce) return <Tag className={className}>{text}</Tag>;
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </Tag>
  );
}
