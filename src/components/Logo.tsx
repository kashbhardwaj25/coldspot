"use client";

import { useEffect, useId, useRef } from "react";

/** How far the iris can move from the centre, in viewBox units. The eyeball's radius is 13. */
const REACH = 4.2;
/** Pointer distance, in CSS pixels, at which the eye is looking fully that way. */
const FULL_GAZE_AT = 220;

/** The Uncanny Map mark: an eyeball that turns to follow the pointer. Holds still with reduced motion. */
export function Logo() {
  // useId can contain characters that break url(#…) references, so keep only safe ones.
  const id = `cs${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const svgRef = useRef<SVGSVGElement>(null);
  const irisRef = useRef<SVGGElement>(null);

  // Writes to the DOM directly, once per frame at most, so following the pointer never re-renders React.
  useEffect(() => {
    const svg = svgRef.current;
    const iris = irisRef.current;
    if (!svg || !iris || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let px = 0;
    let py = 0;
    const look = () => {
      frame = 0;
      const box = svg.getBoundingClientRect();
      const dx = px - (box.left + box.width / 2);
      const dy = py - (box.top + box.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist < 1) return;
      const t = Math.min(1, dist / FULL_GAZE_AT);
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      // Move towards the pointer, and squash along that direction as the iris turns away on the sphere.
      iris.style.transform =
        `translate(${(dx / dist) * REACH * t}px, ${(dy / dist) * REACH * t}px) ` +
        `rotate(${angle}deg) scaleX(${1 - 0.16 * t}) rotate(${-angle}deg)`;
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!frame) frame = requestAnimationFrame(look);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const ball = `${id}-ball`;
  const irisFill = `${id}-iris`;
  const clip = `${id}-clip`;
  return (
    <svg ref={svgRef} className="mark" viewBox="2.5 2.5 27 27" aria-hidden="true">
      <defs>
        <radialGradient id={ball} cx="40%" cy="34%" r="70%">
          <stop offset="0" style={{ stopColor: "var(--ink)" }} />
          <stop offset="0.62" style={{ stopColor: "var(--ink-2)" }} />
          <stop offset="1" style={{ stopColor: "var(--muted)" }} />
        </radialGradient>
        <radialGradient id={irisFill}>
          <stop offset="0.3" style={{ stopColor: "var(--ice)" }} />
          <stop offset="1" style={{ stopColor: "var(--ice)", stopOpacity: 0.55 }} />
        </radialGradient>
        <clipPath id={clip}>
          <circle cx="16" cy="16" r="13" />
        </clipPath>
      </defs>
      <circle cx="16" cy="16" r="13" fill={`url(#${ball})`} />
      <g clipPath={`url(#${clip})`}>
        <g ref={irisRef} className="iris">
          <circle cx="16" cy="16" r="6.2" fill={`url(#${irisFill})`} />
          <circle
            cx="16"
            cy="16"
            r="4.4"
            fill="none"
            strokeWidth="0.7"
            opacity="0.35"
            style={{ stroke: "var(--night)" }}
          />
          <circle cx="16" cy="16" r="2.4" style={{ fill: "var(--night)" }} />
        </g>
      </g>
      <ellipse
        cx="11.4"
        cy="10.6"
        rx="2.6"
        ry="1.7"
        opacity="0.55"
        transform="rotate(-35 11.4 10.6)"
        style={{ fill: "var(--ink)" }}
      />
    </svg>
  );
}
