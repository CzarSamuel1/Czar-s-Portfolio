"use client";

import { motion, useReducedMotion } from "motion/react";

/** Springs into place once when scrolled into view. Used for tags and labels. */
export function Pop({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -4 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "spring", stiffness: 320, damping: 18, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
