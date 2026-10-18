import type { ReactNode } from "react";

export const Icon: Record<"plus" | "sound" | "shuffle" | "list", ReactNode> = {
  plus: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M8 3v10M3 8h10" />
    </svg>
  ),
  sound: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2 6h3l4-3v10L5 10H2z" />
      <path d="M11.5 5.5c1.2 1.4 1.2 3.6 0 5M13.5 3.8c2 2.4 2 6 0 8.4" />
    </svg>
  ),
  shuffle: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2 4h3l6 8h3M2 12h3l6-8h3M12 2l2 2-2 2M12 10l2 2-2 2" />
    </svg>
  ),
  list: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M5 4h9M5 8h9M5 12h9" />
      <circle cx="2.2" cy="4" r=".6" fill="currentColor" />
      <circle cx="2.2" cy="8" r=".6" fill="currentColor" />
      <circle cx="2.2" cy="12" r=".6" fill="currentColor" />
    </svg>
  ),
};

/** The Coldspot mark: isotherm rings drawing in towards a cold core, inside the dashed tuning ring. */
export function Logo() {
  return (
    <svg className="mark" viewBox="0 0 32 32" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <circle cx="16" cy="16" r="14.2" strokeWidth="1.3" strokeDasharray="0.1 3.62" opacity=".55" />
        <circle cx="16.6" cy="15.4" r="10.2" strokeWidth="1.5" opacity=".45" />
        <circle cx="17.3" cy="14.7" r="6.3" strokeWidth="1.7" opacity=".75" />
      </g>
      <circle cx="17.9" cy="14.1" r="2.7" fill="currentColor" />
    </svg>
  );
}
