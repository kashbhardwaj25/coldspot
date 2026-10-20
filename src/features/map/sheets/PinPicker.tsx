"use client";

import { IconButton } from "@/components/ui/IconButton";
import type { EngineItem } from "@/features/globe/engine";
import { formatCoords } from "@/lib/geo";
import { usePinPicker } from "./usePinPicker";

type Point = { lat: number; lon: number };
type Props = {
  initial: Point;
  /** Famous cases, drawn as labelled landmarks so there's something to steer by inland. */
  landmarks: EngineItem[];
  /** A town picked in the town search; the picker flies there when it changes. */
  target: Point | null;
};

/**
 * A small globe inside the share form: drag it until the place sits under the pin. Its centre goes into the
 * hidden `lat` and `lon` fields (see usePinPicker). The server still blurs the spot to about 5 km.
 */
export function PinPicker({ initial, landmarks, target }: Props) {
  const picker = usePinPicker({ initial, landmarks, target });
  // Refs stay standalone variables, as the React Compiler rules require.
  const { baseRef, dotsRef, latRef, lonRef, coordsRef } = picker;
  const { lat, lon } = initial;
  const problem = picker.locating !== "idle" && picker.locating !== "busy" ? picker.locating : null;

  return (
    <div className="picker-field">
      <span className="label" id="pickerLabel">
        Where it happened
      </span>
      {/* Swipes here move the map, not the sheet. */}
      <div className="picker" data-base-ui-swipe-ignore="">
        <canvas className="picker-base" ref={baseRef} aria-hidden="true" />
        <canvas
          className="picker-dots"
          ref={dotsRef}
          tabIndex={0}
          aria-labelledby="pickerLabel"
          aria-describedby="pickerHint"
        />
        <span className="picker-pin" aria-hidden="true" />
        <div className="picker-zoom">
          <IconButton icon="plus" label="Zoom in" size="small" onClick={picker.zoomIn} />
          <IconButton icon="minus" label="Zoom out" size="small" onClick={picker.zoomOut} />
        </div>
      </div>
      <input type="hidden" name="lat" ref={latRef} defaultValue={lat} />
      <input type="hidden" name="lon" ref={lonRef} defaultValue={lon} />
      <div className="picker-tools">
        <button type="button" className="btn" onClick={picker.locate} disabled={picker.locating === "busy"}>
          {picker.locating === "busy" ? "Finding you…" : "Use my location"}
        </button>
        {problem && (
          <span className="error" role="alert">
            {problem}
          </span>
        )}
      </div>
      <p className="pin" id="pickerHint">
        Drag the map, or use the arrow keys, until the place is under the pin:{" "}
        <b ref={coordsRef} aria-hidden="true">
          {formatCoords(lat, lon)}
        </b>
        . Only a ~5 km area is shown on the site.
      </p>
    </div>
  );
}
