import type { ReactNode } from "react";

// Social preview images are rendered by next/og, which can't read CSS variables, so the palette from
// src/styles/tokens.css is repeated here.
const NIGHT = "#110e18";
const INK = "#ece5d6";
const MUTED = "#857c94";
const ICE = "#a9dceb";

type Props = { eyebrow: string; accent: string; title: string; subtitle: string; footer?: ReactNode };

/** The 1200×630 card used for link previews: the site's dark style, with the ring motif from the globe. */
export function OgCard({ eyebrow, accent, title, subtitle, footer }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: NIGHT,
        color: INK,
        position: "relative",
      }}
    >
      {[460, 320, 180].map((size, i) => (
        <div
          key={size}
          style={{
            position: "absolute",
            right: 140 - size / 2,
            top: 315 - size / 2,
            width: size,
            height: size,
            borderRadius: size,
            border: `${i === 2 ? 3 : 2}px ${i === 0 ? "dashed" : "solid"} ${ICE}`,
            opacity: 0.18 + i * 0.12,
          }}
        />
      ))}
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, letterSpacing: 6, color: MUTED }}>
        <div style={{ width: 14, height: 14, borderRadius: 14, background: accent }} />
        <span style={{ color: accent }}>{eyebrow.toUpperCase()}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 860 }}>
        <div style={{ fontSize: title.length > 40 ? 64 : 80, lineHeight: 1.05, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 32, lineHeight: 1.35, color: "#b4aabd" }}>{subtitle}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, color: MUTED }}>
        <span style={{ letterSpacing: 8, color: INK }}>COLDSPOT</span>
        <span>{footer ?? "Something happened here"}</span>
      </div>
    </div>
  );
}
