import { describe, expect, it } from "vitest";
import { updateCharge } from "./glow";

const near = (key: string, d: number) => ({ item: { key }, d });

describe("updateCharge", () => {
  it("charges the tuned marker towards full", () => {
    const levels = new Map<string, number>();
    for (let i = 0; i < 30; i++) updateCharge(levels, "a", [], 1 / 60, false);
    expect(levels.get("a")).toBeGreaterThan(0.95);
  });

  it("leaves an afterglow that fades, then forgets it", () => {
    const levels = new Map([["a", 1]]);
    updateCharge(levels, null, [], 1, false);
    const after = levels.get("a") ?? 0;
    expect(after).toBeGreaterThan(0.5);
    expect(after).toBeLessThan(1);
    updateCharge(levels, null, [], 30, false);
    expect(levels.has("a")).toBe(false);
  });

  it("gives markers passing near the ring part of a charge, more the closer they pass", () => {
    const levels = new Map<string, number>();
    updateCharge(levels, null, [near("close", 10), near("edge", 80), near("far", 200)], 1 / 60, false);
    expect(levels.get("close") ?? 0).toBeGreaterThan(levels.get("edge") ?? 0);
    expect(levels.get("close") ?? 0).toBeLessThan(1);
    expect(levels.has("far")).toBe(false);
  });

  it("lights only the tuned marker with reduced motion", () => {
    const levels = new Map([["a", 0.8]]);
    updateCharge(levels, "b", [], 1 / 60, true);
    expect([...levels]).toEqual([["b", 1]]);
  });
});
