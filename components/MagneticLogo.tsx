"use client";

import { useEffect, useRef } from "react";

/**
 * The adMYTT wordmark + three equalizer bars with the cursor-reactive
 * "magnetic" motion, ported verbatim from the standalone logo the user
 * approved. Respects prefers-reduced-motion (no movement).
 */
export default function MagneticLogo({ height = 26, white = false }: { height?: number; white?: boolean }) {
  const markRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mark = markRef.current;
    if (!mark) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const word = mark.querySelector<HTMLElement>("[data-word]");
    const bars = Array.from(mark.querySelectorAll<HTMLElement>("[data-bar]"));
    if (!word) return;
    const all = [word, ...bars];
    all.forEach((el) => {
      el.style.transition = "transform .25s cubic-bezier(.22,.61,.36,1)";
    });
    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));

    const onMove = (e: MouseEvent) => {
      const r = mark.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / Math.max(r.width, 1);
      const ny = (e.clientY - (r.top + r.height / 2)) / Math.max(r.height, 1);
      const near = Math.abs(nx) < 2.4 && Math.abs(ny) < 6;
      const k = near ? 1 : 0.3;
      word.style.transitionDuration = ".14s";
      word.style.transform = `translate(${clamp(nx * 7 * k, 4).toFixed(1)}px,${clamp(ny * 5 * k, 3).toFixed(1)}px)`;
      bars.forEach((b, i) => {
        const depth = (12 + i * 7) * k;
        b.style.transitionDuration = ".14s";
        b.style.transform = `translate(${clamp(nx * depth, 11).toFixed(1)}px,${clamp(ny * 8 * k, 6).toFixed(1)}px)`;
      });
    };
    const onLeave = () => {
      all.forEach((el) => {
        el.style.transitionDuration = ".5s";
        el.style.transform = "translate(0,0)";
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const ratio = 1024 / 274; // intrinsic logo aspect ratio

  return (
    <span ref={markRef} style={{ display: "flex", alignItems: "center", gap: 11 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={white ? "/logo-wordmark-white.png" : "/logo-wordmark.png"}
        alt="adMYTT"
        data-word="1"
        width={Math.round(height * ratio)}
        height={height}
        style={{ height, width: "auto", display: "block", willChange: "transform" }}
      />
      <span style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 24 }}>
        <span data-bar="1" style={{ width: 5, height: 24, background: "#B91C1C", borderRadius: 1, willChange: "transform" }} />
        <span data-bar="1" style={{ width: 4, height: 16, background: "#4F46E5", borderRadius: 1, willChange: "transform" }} />
        <span data-bar="1" style={{ width: 3, height: 10, background: "#B91C1C", borderRadius: 1, willChange: "transform" }} />
      </span>
    </span>
  );
}
