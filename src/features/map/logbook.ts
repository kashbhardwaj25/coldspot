/**
 * The cases and stories this visitor has opened, so the tuner card can mark them read on later visits.
 * Stored in this browser only, as item keys (`case:roswell`); nothing is sent anywhere.
 */

const KEY = "um_read";
const EMPTY: ReadonlySet<string> = new Set();

let cache: ReadonlySet<string> | null = null;
const listeners = new Set<() => void>();

function load(): ReadonlySet<string> {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(raw) ? new Set(raw.filter((k): k is string => typeof k === "string")) : EMPTY;
  } catch {
    // Blocked storage (private windows) or a damaged value: start with nothing read.
    return EMPTY;
  }
}

/** What's been read, the same Set until something new is added (useSyncExternalStore needs that). */
export function readKeys(): ReadonlySet<string> {
  cache ??= load();
  return cache;
}

/** Before the browser has loaded the logbook (server render, hydration): nothing read. */
export const serverReadKeys = () => EMPTY;

export function markRead(key: string) {
  const current = readKeys();
  if (current.has(key)) return;
  cache = new Set(current).add(key);
  try {
    localStorage.setItem(KEY, JSON.stringify([...cache]));
  } catch {
    // Still lit for this visit, just not remembered.
  }
  for (const fn of listeners) fn();
}

/** Listen for changes, including ones made in another tab. */
export function subscribeRead(fn: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY) return;
    cache = null;
    fn();
  };
  listeners.add(fn);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", onStorage);
  };
}

/** Forget the cached copy. For tests. */
export function resetLogbook() {
  cache = null;
}
