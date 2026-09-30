"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the user's prefers-reduced-motion setting.
 * Every GSAP/Motion sequence in this project should check this before
 * running anything beyond a simple opacity/position change.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
