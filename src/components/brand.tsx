import type { ReactNode } from "react";

export const Icon: Record<"plus" | "minus" | "close" | "sound" | "shuffle" | "list" | "user", ReactNode> = {
  plus: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M8 3v10M3 8h10" />
    </svg>
  ),
  minus: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 8h10" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" />
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
  user: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="8" cy="5.5" r="2.8" />
      <path d="M2.5 14c.8-2.8 3-4.2 5.5-4.2s4.7 1.4 5.5 4.2" />
    </svg>
  ),
};
