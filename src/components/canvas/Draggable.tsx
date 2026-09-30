"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Makes a sticker or note behave like an object on a canvas:
 * it "lands" when it enters, lifts on hover, and can be dragged around.
 * Drag is mouse-only; touch devices get a tap wiggle so page scrolling is never blocked.
 */
export function Draggable({
  children,
  rotate = 0,
  delay = 0,
  inView = false,
  className,
}: {
  children: React.ReactNode;
  rotate?: number;
  delay?: number;
  /** Play the landing animation when scrolled into view instead of on load. */
  inView?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [canDrag, setCanDrag] = useState(false);
  useEffect(() => {
    setCanDrag(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const settled = { opacity: 1, scale: 1, rotate };
  const landing = reduce ? false : { opacity: 0, scale: 1.35, rotate: rotate + (rotate >= 0 ? 10 : -10) };
  const spring = { type: "spring" as const, stiffness: 260, damping: 16, delay: reduce ? 0 : delay };

  return (
    <motion.div
      data-cursor={canDrag ? "drag" : undefined}
      drag={canDrag}
      dragMomentum={false}
      dragElastic={0.1}
      initial={landing}
      animate={inView ? undefined : settled}
      whileInView={inView ? settled : undefined}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={spring}
      whileHover={reduce ? undefined : { scale: 1.06, rotate: rotate * 0.3 }}
      whileTap={reduce ? undefined : { scale: 0.97, rotate: rotate + 3 }}
      whileDrag={{ scale: 1.1, rotate: 0, zIndex: 40 }}
      style={{ rotate }}
      className={cn(
        "relative select-none",
        canDrag && "cursor-grab touch-none active:cursor-grabbing",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
