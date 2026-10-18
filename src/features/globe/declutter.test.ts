import { describe, expect, it } from "vitest";
import { Declutter } from "./declutter";
import { type EngineItem } from "./tuning";

const item = (key: string, lat: number, lon: number, priority = 0): EngineItem => ({
  key,
  category: "sky",
  lat,
  lon,
  label: key,
  narrated: false,
  priority,
});

// Two cases 1° apart, and one far away.
const near = item("near", 20, 70);
const featured = item("featured", 20, 71, 1);
const far = item("far", -30, -60);
const items = [near, featured, far];
const keys = (list: EngineItem[]) => list.map((i) => i.key).sort();

// At radius 200px, 34px is about 10° of arc; at 4000px, about 0.5°.
const ZOOMED_OUT = 200;
const ZOOMED_IN = 4000;

describe("Declutter", () => {
  it("hides the lower-priority marker where two crowd together", () => {
    expect(keys(new Declutter().select(items, ZOOMED_OUT, []))).toEqual(["far", "featured"]);
  });

  it("shows everything once zoomed in far enough", () => {
    expect(keys(new Declutter().select(items, ZOOMED_IN, []))).toEqual(["far", "featured", "near"]);
  });

  it("always shows pinned items, even over a featured neighbour", () => {
    expect(keys(new Declutter().select(items, ZOOMED_OUT, ["near"]))).toEqual(["far", "near"]);
  });

  it("keeps earlier items on equal priority, so the result doesn't depend on screen position", () => {
    const a = item("a", 0, 0);
    const b = item("b", 0, 1);
    expect(keys(new Declutter().select([a, b], ZOOMED_OUT, []))).toEqual(["a"]);
  });

  it("treats longitudes either side of 180° as neighbours", () => {
    const east = item("east", 0, 179.5, 1);
    const west = item("west", 0, -179.5);
    expect(keys(new Declutter().select([east, west], ZOOMED_OUT, []))).toEqual(["east"]);
  });

  it("returns the same array while the zoom step and pins are unchanged", () => {
    const d = new Declutter();
    const first = d.select(items, ZOOMED_OUT, [null]);
    expect(d.select(items, ZOOMED_OUT * 1.05, [null])).toBe(first);
  });
});
