"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ===========================================================================
   Live-scene runtime, ported from the approved v2 prototype.

   Drives a self-running "live demo" panel: autoplay when ≥45% in view, pause on
   hover/focus and when the tab is hidden, a single completed cycle that holds
   its final state (no looping), keyboard Play/Pause + Replay, and a progress
   bar updated off React state (direct ref writes, no per-frame re-render).
   prefers-reduced-motion shows the finished state without motion.

   The prototype used setInterval rather than requestAnimationFrame because the
   design preview paused rAF; setInterval is reliable in every browser, so we
   keep it for parity.
   =========================================================================== */

type Mode = "linear" | "journey";

interface Options {
  /** Per-step durations in ms. Length defines the number of steps. MUST be a stable reference. */
  durations: number[];
  mode?: Mode;
  /** Step to jump to under prefers-reduced-motion (usually the final step). */
  reducedFinalStep?: number;
}

export interface SceneApi {
  step: number;
  playing: boolean;
  /** journey-only: whether the current stage's live state change has fired */
  changed: boolean;
  sceneRef: React.RefObject<HTMLDivElement | null>;
  progRef: React.RefObject<HTMLDivElement | null>;
  toggle: () => void;
  replay: () => void;
  selectStage: (i: number) => void;
  onEnter: () => void;
  onLeave: () => void;
}

export function useScene({ durations, mode = "linear", reducedFinalStep }: Options): SceneApi {
  const steps = durations.length;
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [changed, setChanged] = useState(false);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const progRef = useRef<HTMLDivElement | null>(null);

  const m = useRef({
    elapsed: 0,
    visible: false,
    hover: false,
    userPaused: false,
    done: false,
    last: 0,
    holdUntil: 0,
    reduced: false,
    hidden: false,
  });

  const stepRef = useRef(step);
  stepRef.current = step;
  const playingRef = useRef(playing);
  playingRef.current = playing;
  const changedRef = useRef(changed);
  changedRef.current = changed;

  useEffect(() => {
    const reduced = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    m.current.reduced = reduced;
    m.current.hidden = document.hidden;
    const onVis = () => {
      m.current.hidden = document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    if (reduced) {
      if (reducedFinalStep != null) setStep(reducedFinalStep);
      if (mode === "journey") setChanged(true);
    }

    const visFrac = (el: HTMLElement | null) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      const vis = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
      return vis / Math.max(1, Math.min(r.height || 1, vh));
    };

    const id = setInterval(() => {
      const s = m.current;
      const ts = performance.now();
      const cur = stepRef.current;
      const dur = durations[cur] || 1000;

      s.visible = visFrac(sceneRef.current) >= 0.45;
      if (s.visible && !s.reduced && !s.userPaused && !s.done && !playingRef.current) {
        setPlaying(true);
      }

      const active =
        !s.reduced &&
        !s.hidden &&
        playingRef.current &&
        s.visible &&
        !s.hover &&
        (mode !== "journey" || ts >= s.holdUntil);

      const last = s.last || ts;
      s.last = ts;
      if (active) s.elapsed += ts - last;

      if (mode === "journey" && active && !changedRef.current && s.elapsed >= 950) {
        setChanged(true);
      }

      if (progRef.current) {
        const frac = Math.min(s.elapsed / dur, 1);
        progRef.current.style.width = (Math.min((cur + frac) / steps, 1) * 100).toFixed(1) + "%";
      }

      if (active && s.elapsed >= dur) {
        s.elapsed = 0;
        if (cur >= steps - 1) {
          setPlaying(false);
          s.done = true;
        } else if (mode === "journey") {
          setStep(cur + 1);
          setChanged(false);
        } else {
          setStep(cur + 1);
        }
      }
    }, 100);

    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [durations, mode, reducedFinalStep, steps]);

  const toggle = useCallback(() => {
    const next = !playingRef.current;
    m.current.userPaused = !next;
    if (next) {
      m.current.done = false;
      m.current.last = 0;
    }
    setPlaying(next);
  }, []);

  const replay = useCallback(() => {
    const s = m.current;
    s.elapsed = 0;
    s.done = false;
    s.userPaused = false;
    s.holdUntil = 0;
    s.last = 0;
    const reduced = s.reduced;
    setPlaying(!reduced);
    setStep(reducedFinalStep != null ? (reduced ? reducedFinalStep : 0) : 0);
    if (mode === "journey") setChanged(!!reduced);
  }, [mode, reducedFinalStep]);

  const selectStage = useCallback((i: number) => {
    const s = m.current;
    s.elapsed = 0;
    s.userPaused = false;
    s.holdUntil = performance.now() + 12000;
    s.last = 0;
    setStep(i);
    setChanged(false);
    setPlaying(true);
    if (s.reduced) setChanged(true);
    else window.setTimeout(() => setChanged(true), 1000);
  }, []);

  const onEnter = useCallback(() => {
    m.current.hover = true;
  }, []);
  const onLeave = useCallback(() => {
    m.current.hover = false;
  }, []);

  return { step, playing, changed, sceneRef, progRef, toggle, replay, selectStage, onEnter, onLeave };
}
