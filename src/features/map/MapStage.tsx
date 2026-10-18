import type { Ref } from "react";
import { Ring } from "./parts";

type Props = {
  baseRef: Ref<HTMLCanvasElement>;
  dotsRef: Ref<HTMLCanvasElement>;
  ringRef: Ref<HTMLDivElement>;
  hintRef: Ref<HTMLDivElement>;
  /** Colour of what's tuned in, or null between stations. */
  color: string | null;
  hintHidden: boolean;
};

/** The globe's two canvases, the centre ring and the first-visit hint. The engine draws; this only places them. */
export function MapStage({ baseRef, dotsRef, ringRef, hintRef, color, hintHidden }: Props) {
  return (
    <>
      <canvas className="globe-base" ref={baseRef} aria-hidden="true" />
      <canvas
        className="globe-dots"
        ref={dotsRef}
        tabIndex={0}
        aria-label="Coldspot map. Drag or use arrow keys to move. Anything that reaches the centre ring tunes in. Press Enter to open it."
      />
      <Ring ref={ringRef} color={color} />
      <div className="hint" ref={hintRef} style={{ opacity: hintHidden ? 0 : 1 }}>
        Drag the map · anything in the ring tunes in
      </div>
    </>
  );
}
