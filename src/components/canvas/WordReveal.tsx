"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Words come into focus one after another on load (opacity + de-blur).
 * Same idea as ScrollText, but time-based, because hero text is already on screen.
 */
export function WordReveal({
  text,
  delay = 0,
  stagger = 0.08,
  wordClassName,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  wordClassName?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <>{text}</>;

  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <motion.span
            initial={{ opacity: 0.14, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: delay + i * stagger }}
            className={cn("inline-block", wordClassName)}
          >
            {word}
          </motion.span>
        </Fragment>
      ))}
    </>
  );
}
