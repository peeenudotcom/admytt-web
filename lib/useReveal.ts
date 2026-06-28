"use client";

import { useEffect, useRef, useState } from "react";

/** Drives a 0→1 progress value once the element scrolls into view.
    Used to stagger-reveal rows and count numbers up. Respects reduced motion. */
export function useReveal(durationMs = 1700) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const reduced = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setP(1);
      return;
    }
    let raf = 0, start = 0, ran = false;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / durationMs, 1);
      setP(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !ran) {
          ran = true;
          start = 0;
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [durationMs]);

  return { ref, p };
}

/** Per-item stagger: returns 0→1 for item `i` of `count` across global progress `p`. */
export function stagger(p: number, i: number, count: number, tail = 0.45): number {
  const span = (1 - tail) / Math.max(1, count - 1);
  const local = (p - i * span) / tail;
  return Math.max(0, Math.min(1, local));
}

export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
