"use client";

import { useEffect, useRef, type CSSProperties, type Ref } from "react";
import type { Signal } from "@/lib/signal";

/** The first line types itself in through a flicker of static. */
export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = text;
      return;
    }
    const glyphs = "▒░▓·:;/\\|~—";
    const t0 = performance.now();
    const dur = 520;
    let raf = 0;
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / dur);
      const n = Math.floor(text.length * k);
      let out = text.slice(0, n);
      for (let i = n; i < Math.min(text.length, n + 14); i++)
        out += text[i] === " " ? " " : glyphs[(Math.random() * glyphs.length) | 0];
      el.textContent = out;
      if (k < 1) raf = requestAnimationFrame(step);
      else el.textContent = text;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [text]);
  return (
    <p className={className} ref={ref}>
      {text}
    </p>
  );
}

/**
 * Coordinates under the ring. Written straight to the DOM on every frame, so React never re-renders for them.
 * Hidden from screen readers so the live tuner card doesn't announce every movement.
 */
export function Freq({ source }: { source: Signal<string> }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(
    () =>
      source.subscribe((text) => {
        if (ref.current) ref.current.textContent = text;
      }),
    [source],
  );
  return <span className="freq" ref={ref} aria-hidden="true" />;
}

/** The tuning ring in the middle of the map. The globe engine positions it. */
export function Ring({ ref, color }: { ref: Ref<HTMLDivElement>; color: string | null }) {
  return (
    <div
      className={`ring${color ? " on" : ""}`}
      ref={ref}
      aria-hidden="true"
      style={color ? ({ "--tune": color } as CSSProperties) : undefined}
    >
      <svg viewBox="0 0 64 64">
        <circle className="r" cx="32" cy="32" r="22" />
        <g className="spin">
          <circle className="r" cx="32" cy="32" r="29" strokeDasharray="3 7" />
        </g>
        <line className="t" x1="32" y1="0" x2="32" y2="6" />
        <line className="t" x1="32" y1="58" x2="32" y2="64" />
        <line className="t" x1="0" y1="32" x2="6" y2="32" />
        <line className="t" x1="58" y1="32" x2="64" y2="32" />
      </svg>
    </div>
  );
}

/** Zoom buttons beside the ring. The globe engine positions them. */
export function ZoomControls({ ref, onZoom }: { ref: Ref<HTMLDivElement>; onZoom: (factor: number) => void }) {
  return (
    <div className="zoom" ref={ref}>
      <button type="button" className="btn" onClick={() => onZoom(1.6)} aria-label="Zoom in">
        +
      </button>
      <button type="button" className="btn" onClick={() => onZoom(1 / 1.6)} aria-label="Zoom out">
        −
      </button>
    </div>
  );
}
