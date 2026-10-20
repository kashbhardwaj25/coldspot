import type { Ref } from "react";
import { Ring } from "./parts";

type Props = {
  baseRef: Ref<HTMLCanvasElement>;
  dotsRef: Ref<HTMLCanvasElement>;
  ringRef: Ref<HTMLDivElement>;
  hintRef: Ref<HTMLDivElement>;
  /** Whether something is tuned in. */
  tuned: boolean;
  hintHidden: boolean;
};

/** The globe's two canvases, the centre ring and the first-visit hint. The engine draws; this only places them. */
export function MapStage({ baseRef, dotsRef, ringRef, hintRef, tuned, hintHidden }: Props) {
  return (
    <>
      <canvas className="globe-base" ref={baseRef} aria-hidden="true" />
      <canvas
        className="globe-dots"
        ref={dotsRef}
        tabIndex={0}
        aria-label="Uncanny Map globe. Drag or use arrow keys to move. Anything that reaches the centre ring tunes in. Press Enter to open it."
      />
      <Ring ref={ringRef} on={tuned} />
      <div className="hint" ref={hintRef} data-hidden={hintHidden || undefined}>
        Drag the map<span className="hint-more"> · anything in the ring tunes in</span>
      </div>
    </>
  );
}
