import { geoOrthographic } from "d3-geo";
import { describe, expect, it, vi } from "vitest";
import type { Radio } from "./radio";
import { findVisible, hitTest, Tuner, type EngineItem, type Visible } from "./tuning";

const item = (key: string, lat: number, lon: number): EngineItem => ({
  key,
  category: "sky",
  lat,
  lon,
  label: key,
  priority: 0,
});
const at = (key: string, d: number, x = 0, y = 0): Visible => ({ item: item(key, 0, 0), x, y, d });

describe("findVisible", () => {
  // Looking straight at lat 0, lon 0, with the ring at the projection's centre.
  const projection = geoOrthographic().scale(200).translate([200, 200]).rotate([0, 0]);
  const ring = { x: 200, y: 200 };

  it("keeps only the near side of the globe, nearest to the ring first", () => {
    const shown = findVisible(
      [item("far", 0, 30), item("near", 0, 5), item("behind", 0, 170)],
      projection,
      [0, 0],
      ring,
    );
    expect(shown.map((v) => v.item.key)).toEqual(["near", "far"]);
    expect(shown[0]?.d).toBeLessThan(shown[1]?.d ?? 0);
  });

  it("drops items right on the edge, where they'd be squashed flat", () => {
    expect(findVisible([item("edge", 0, 89.5)], projection, [0, 0], ring)).toEqual([]);
  });

  it("raises orbit items away from the centre, remembering the ground below them", () => {
    const [v] = findVisible([{ ...item("orbit", 0, 30), alt: 0.5 }], projection, [0, 0], ring);
    // The ground point is 100 px right of the centre (200 · sin 30°); half a radius up puts the item at 150.
    expect(v?.ground?.x).toBeCloseTo(300);
    expect(v?.x).toBeCloseTo(350);
    expect(v?.d).toBeCloseTo(150);
  });
});

describe("Tuner", () => {
  const setup = () => {
    const radio = { burst: vi.fn(), update: vi.fn() } as unknown as Radio;
    const onTune = vi.fn();
    const onNearest = vi.fn();
    return { tuner: new Tuner({ radio, onTune, onNearest }), radio, onTune, onNearest };
  };

  it("tunes in inside 22 px and plays the static burst", () => {
    const { tuner, radio, onTune } = setup();
    tuner.update([at("a", 30)]);
    expect(tuner.key).toBeNull();
    tuner.update([at("a", 20)]);
    expect(tuner.key).toBe("a");
    expect(onTune).toHaveBeenLastCalledWith("a");
    expect(radio.burst).toHaveBeenCalledOnce();
  });

  it("holds on until 32 px, so the edge doesn't flicker", () => {
    const { tuner, onTune } = setup();
    tuner.update([at("a", 10)]);
    tuner.update([at("a", 30)]);
    expect(tuner.key).toBe("a");
    tuner.update([at("a", 33)]);
    expect(tuner.key).toBeNull();
    expect(onTune).toHaveBeenLastCalledWith(null);
  });

  it("switches to an item flown to on purpose once it's in the ring, even while a neighbour holds on", () => {
    const { tuner } = setup();
    tuner.update([at("a", 5)]);
    tuner.update([at("b", 15), at("a", 20)], "b");
    expect(tuner.key).toBe("b");
    tuner.update([at("a", 20), at("b", 25)], "b");
    expect(tuner.key).toBe("b");
  });

  it("reports the nearest item only when it changes", () => {
    const { tuner, onNearest } = setup();
    tuner.update([at("a", 100)]);
    tuner.update([at("a", 90)]);
    tuner.update([at("b", 80), at("a", 85)]);
    expect(onNearest.mock.calls).toEqual([["a"], ["b"]]);
  });

  it("clears what's tuned in", () => {
    const { tuner, onTune } = setup();
    tuner.update([at("a", 5)]);
    tuner.clear();
    expect(tuner.key).toBeNull();
    expect(onTune).toHaveBeenLastCalledWith(null);
  });
});

describe("hitTest", () => {
  const visible = [at("a", 0, 100, 100), at("b", 0, 112, 100)];

  it("picks the nearest marker within reach", () => {
    expect(hitTest(visible, 109, 100)?.item.key).toBe("b");
    expect(hitTest(visible, 101, 101)?.item.key).toBe("a");
  });

  it("misses when nothing is close", () => {
    expect(hitTest(visible, 200, 200)).toBeNull();
  });
});
