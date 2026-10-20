"use client";

import { useEffect, useRef, type Ref } from "react";
import { IconButton } from "@/components/ui/IconButton";
import type { Signal } from "@/lib/signal";

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

/** The tuning ring in the middle of the map; lit while something is tuned in. The globe engine positions it. */
export function Ring({ ref, on }: { ref: Ref<HTMLDivElement>; on: boolean }) {
  return (
    <div className={`ring${on ? " on" : ""}`} ref={ref} aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <circle className="r" cx="32" cy="32" r="22" />
        <line className="t" x1="32" y1="2" x2="32" y2="8" />
        <line className="t" x1="32" y1="56" x2="32" y2="62" />
        <line className="t" x1="2" y1="32" x2="8" y2="32" />
        <line className="t" x1="56" y1="32" x2="62" y2="32" />
      </svg>
    </div>
  );
}

/** Zoom buttons beside the ring. The globe engine positions them. */
export function ZoomControls({ ref, onZoom }: { ref: Ref<HTMLDivElement>; onZoom: (factor: number) => void }) {
  return (
    <div className="zoom" ref={ref}>
      <IconButton icon="plus" label="Zoom in" onClick={() => onZoom(1.6)} />
      <IconButton icon="minus" label="Zoom out" onClick={() => onZoom(1 / 1.6)} />
    </div>
  );
}
