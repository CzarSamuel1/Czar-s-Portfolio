"use client";

import { useEffect, useRef } from "react";

/**
 * A small label that trails the mouse, like a multiplayer cursor.
 * It says YOU by default, DRAG over movable objects, and OPEN over links and buttons.
 * Mouse devices only.
 */
export function CursorChip() {
  const ref = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    const text = label.current;
    if (!el || !text) return;

    const move = (e: PointerEvent) => {
      el.style.transform = `translate3d(${e.clientX + 6}px, ${e.clientY + 6}px, 0)`;
      el.style.opacity = "1";
      const target = (e.target as Element | null)?.closest<HTMLElement>("[data-cursor], a, button");
      const next = target ? (target.dataset.cursor ?? "open").toUpperCase() : "YOU";
      if (text.textContent !== next) text.textContent = next;
    };
    const hide = () => {
      el.style.opacity = "0";
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0 transition-opacity duration-200"
    >
      <span className="absolute -left-1 -top-1 size-2.5 rounded-full bg-[var(--color-ink)]" />
      <span
        ref={label}
        className="mono ml-2 mt-2 inline-block rounded-full bg-[var(--color-ink)] px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-white"
      >
        YOU
      </span>
    </div>
  );
}
