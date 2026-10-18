/**
 * The palette for places CSS variables can't reach: the globe's canvas and the link-preview images (next/og).
 * The values must match src/styles/tokens.css; tokens.test.ts fails if they drift apart.
 */
export const PALETTE = {
  night: "#110e18",
  night2: "#171322",
  ink: "#ece5d6",
  ink2: "#b4aabd",
  muted: "#857c94",
  ice: "#a9dceb",
  bone: "#e6dcc6",
} as const;

/** Colours only the globe uses, named for what they draw. Bone tints famous cases; ice tints people's stories. */
export const GLOBE = {
  haloFamous: "rgba(230, 220, 198, 0.12)",
  haloPeople: "rgba(169, 220, 235, 0.14)",
  haloEdge: "rgba(150, 120, 210, 0)",
  oceanLight: "#1e1830",
  oceanDark: "#0d0a14",
  gridFamous: "rgba(230, 220, 198, 0.07)",
  gridPeople: "rgba(236, 229, 214, 0.045)",
  land: "#262036",
  coast: "rgba(122, 108, 160, 0.55)",
  rim: "rgba(197, 162, 238, 0.22)",
  diamondEdge: "rgba(230, 220, 198, 0.55)",
  label: "rgba(230, 220, 198, 0.72)",
} as const;
