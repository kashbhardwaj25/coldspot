"use client";

import { useEffect, useRef } from "react";

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

