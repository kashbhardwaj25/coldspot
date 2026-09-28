/** What the input layer asks of the globe. Distances are in CSS pixels relative to the canvas. */
export type InputTarget = {
  getZoom(): number;
  /** A pointer went down: stop any animation and hold the globe still until release. */
  press(): void;
  /** The wheel or a key moved the globe: stop any animation. */
  interrupt(): void;
  /** Drag by a pointer movement; `dt` is the milliseconds since the last movement. */
  drag(dx: number, dy: number, dt: number): void;
  setZoom(zoom: number): void;
  /** All pointers lifted. `flick` keeps the drag's momentum. */
  release(flick: boolean): void;
  tap(x: number, y: number): void;
  /** Keyboard pan, with no momentum. */
  nudge(dx: number, dy: number): void;
  zoomBy(factor: number): void;
  openTuned(): void;
};

const KEY_STEP = 22;
const ARROWS: Record<string, [number, number]> = {
  ArrowLeft: [KEY_STEP, 0],
  ArrowRight: [-KEY_STEP, 0],
  ArrowUp: [0, KEY_STEP],
  ArrowDown: [0, -KEY_STEP],
};

/** Binds drag, pinch, wheel and keyboard input to the canvas. Returns a function that unbinds it all. */
export function bindInput(el: HTMLCanvasElement, t: InputTarget): () => void {
  const pointers = new Map<number, { x: number; y: number }>();
  let pinch0: { d: number; z: number } | null = null;
  let lastMove = 0;
  let moved = false;
  const cleanup: (() => void)[] = [];

  function on<K extends keyof HTMLElementEventMap>(
    target: EventTarget,
    type: K,
    fn: (e: HTMLElementEventMap[K]) => void,
    opts?: AddEventListenerOptions,
  ) {
    target.addEventListener(type, fn as EventListener, opts);
    cleanup.push(() => target.removeEventListener(type, fn as EventListener, opts));
  }

  const spread = () => {
    const [a, b] = [...pointers.values()];
    return a && b ? Math.hypot(a.x - b.x, a.y - b.y) : 0;
  };

  on(el, "pointerdown", (e) => {
    el.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved = false;
    el.classList.add("dragging");
    if (pointers.size === 2) pinch0 = { d: spread(), z: t.getZoom() };
    t.press();
  });

  on(el, "pointermove", (e) => {
    const prev = pointers.get(e.pointerId);
    if (!prev) return;
    const cur = { x: e.clientX, y: e.clientY };
    pointers.set(e.pointerId, cur);
    if (pointers.size === 2 && pinch0) {
      if (pinch0.d > 0) t.setZoom((pinch0.z * spread()) / pinch0.d);
      return;
    }
    const dx = cur.x - prev.x;
    const dy = cur.y - prev.y;
    if (Math.abs(dx) + Math.abs(dy) > 0.5) moved = true;
    const now = performance.now();
    t.drag(dx, dy, Math.max(8, now - lastMove));
    lastMove = now;
  });

  const end = (e: PointerEvent) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch0 = null;
    if (pointers.size > 0) return;
    el.classList.remove("dragging");
    t.release(performance.now() - lastMove <= 80);
    if (!moved) {
      const rect = el.getBoundingClientRect();
      t.tap(e.clientX - rect.left, e.clientY - rect.top);
    }
  };
  on(el, "pointerup", end);
  on(el, "pointercancel", end);

  on(
    el,
    "wheel",
    (e) => {
      e.preventDefault();
      t.interrupt();
      t.setZoom(t.getZoom() * Math.exp(-e.deltaY * 0.0016));
    },
    { passive: false },
  );

  on(el, "keydown", (e) => {
    const move = ARROWS[e.key];
    if (move) {
      e.preventDefault();
      t.nudge(move[0], move[1]);
    } else if (e.key === "+" || e.key === "=") t.zoomBy(1.25);
    else if (e.key === "-") t.zoomBy(0.8);
    else if (e.key === "Enter") t.openTuned();
  });

  return () => cleanup.forEach((f) => f());
}
