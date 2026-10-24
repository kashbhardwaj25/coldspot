/** Seconds for a marker in the ring to charge most of the way. */
const CHARGE_TIME = 0.14;
/** Seconds for an afterglow to fall to about a third. Long enough to leave a visible trail behind a drag. */
const AFTERGLOW = 4;
/** Markers passing within this many pixels of the ring pick up some charge, more the closer they pass. */
const WAKE = 90;
/** The most charge a passing marker picks up; only the one in the ring is fully lit. */
const PASSING = 0.6;
/** Below this, a marker counts as unlit and is forgotten. */
const FLOOR = 0.02;

/**
 * Phosphor charge per marker, from 0 (unlit) to 1 (fully lit). The marker in the ring charges fully; markers that
 * pass near it pick up part of a charge; all of them keep an afterglow that fades, so a drag leaves a trail and the
 * globe remembers where you've looked. `near` is the visible markers with their distance from the ring, nearest first.
 * With reduced motion, the tuned marker is simply lit and the rest are not.
 */
export function updateCharge(
  levels: Map<string, number>,
  tunedKey: string | null,
  near: { item: { key: string }; d: number }[],
  dt: number,
  reduce: boolean,
) {
  if (reduce) {
    levels.clear();
    if (tunedKey) levels.set(tunedKey, 1);
    return;
  }
  const fade = Math.exp(-dt / AFTERGLOW);
  for (const [key, level] of levels) {
    if (key === tunedKey) continue;
    const next = level * fade;
    if (next < FLOOR) levels.delete(key);
    else levels.set(key, next);
  }
  for (const {
    item: { key },
    d,
  } of near) {
    if (d >= WAKE) break;
    const target = PASSING * (1 - d / WAKE);
    if ((levels.get(key) ?? 0) < target) levels.set(key, target);
  }
  if (tunedKey) {
    const level = levels.get(tunedKey) ?? 0;
    levels.set(tunedKey, level + (1 - level) * (1 - Math.exp(-dt / CHARGE_TIME)));
  }
}

/** Smallest change in charge worth a redraw; below this the difference can't be seen. */
const STEP = 0.002;

/**
 * Whether the glow differs visibly from what was last drawn (`a`), including markers that lit up or went out.
 * Comparing with the last drawing, not the last frame, means a slow fade still redraws as it adds up.
 */
export function glowDiffers(a: Map<string, number>, b: Map<string, number>) {
  if (a.size !== b.size) return true;
  for (const [key, level] of b) if (Math.abs(level - (a.get(key) ?? 0)) > STEP) return true;
  return false;
}
