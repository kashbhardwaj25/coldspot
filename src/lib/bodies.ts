/**
 * Where a famous case happened: on Earth (most of them), in orbit around it, or on the Moon. Orbit cases sit
 * above the place they were seen over; Moon cases sit at their place on the Moon.
 */
export const BODY_KEYS = ["earth", "orbit", "moon"] as const;
export type Body = (typeof BODY_KEYS)[number];

/** The two globes the map can show. Earth's globe also carries the orbit cases. */
export type World = "earth" | "moon";
export const worldOf = (body: Body): World => (body === "moon" ? "moon" : "earth");
