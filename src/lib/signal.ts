/**
 * A value that changes often (every animation frame) and is written straight to the DOM by subscribers,
 * so React never re-renders for it.
 */
export type Signal<T> = {
  get(): T;
  set(value: T): void;
  /** Calls `fn` now and on every change. Returns an unsubscribe function. */
  subscribe(fn: (value: T) => void): () => void;
};

export function signal<T>(initial: T): Signal<T> {
  let value = initial;
  const subs = new Set<(value: T) => void>();
  return {
    get: () => value,
    set(next) {
      value = next;
      subs.forEach((fn) => fn(next));
    },
    subscribe(fn) {
      subs.add(fn);
      fn(value);
      return () => subs.delete(fn);
    },
  };
}
