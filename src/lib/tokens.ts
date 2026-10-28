/**
 * The palette for places CSS variables can't reach: the globe's canvas and the link-preview images (next/og).
 * The values must match src/styles/tokens.css; tokens.test.ts fails if they drift apart.
 */
export const PALETTE = {
  night: "#0d0b14",
  night2: "#15121d",
  ink: "#e8e5dc",
  ink2: "#aca8b6",
  muted: "#8a8597",
  phosphor: "#cdf3d4",
  ice: "#a9dceb",
  bone: "#e6dcc6",
} as const;

/**
 * Colours only the globe uses, named for what they draw. The globe is matte: no halo, a faint grid, and coastlines
 * traced in faded phosphor, like glow paint on a ceiling. Only the markers give off light.
 */
export const GLOBE = {
  shadow: "rgba(0, 0, 0, 0.55)",
  oceanLight: "#16131f",
  oceanDark: "#0b0a10",
  grid: "rgba(232, 229, 220, 0.035)",
  land: "#1c1926",
  coast: "rgba(205, 243, 212, 0.2)",
  rim: "rgba(205, 243, 212, 0.14)",
  diamondEdge: "rgba(205, 243, 212, 0.5)",
  label: "rgba(205, 243, 212, 0.7)",
  // The Moon: unlit grey stone with darker seas, a little lighter than Earth's night side so it reads as another body.
  moonLight: "#3b3842",
  moonDark: "#15131a",
  maria: "rgba(10, 9, 14, 0.55)",
  mariaEdge: "rgba(232, 229, 220, 0.08)",
  orbit: "rgba(205, 243, 212, 0.16)",
  tether: "rgba(205, 243, 212, 0.28)",
} as const;
