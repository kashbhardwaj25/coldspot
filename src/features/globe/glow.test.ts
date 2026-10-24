import { describe, expect, it } from "vitest";
import { glowDiffers, updateCharge } from "./glow";

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

describe("glowDiffers", () => {
  it("is false for the same levels and for changes too small to see", () => {
    expect(glowDiffers(new Map([["a", 0.5]]), new Map([["a", 0.5]]))).toBe(false);
    expect(glowDiffers(new Map([["a", 0.5]]), new Map([["a", 0.501]]))).toBe(false);
  });

  it("is true when a level changes visibly, or a marker lights up or goes out", () => {
    expect(glowDiffers(new Map([["a", 0.5]]), new Map([["a", 0.45]]))).toBe(true);
    expect(glowDiffers(new Map(), new Map([["a", 0.1]]))).toBe(true);
    expect(glowDiffers(new Map([["a", 0.1]]), new Map())).toBe(true);
  });

  it("settles beside a steady neighbour, so a globe at rest stops redrawing", () => {
    const levels = new Map<string, number>();
    const near2 = [near("a", 0), near("b", 30)];
    for (let i = 0; i < 120; i++) updateCharge(levels, "a", near2, 1 / 60, false);
    const drawn = new Map(levels);
    updateCharge(levels, "a", near2, 1 / 60, false);
    expect(glowDiffers(drawn, levels)).toBe(false);
  });

  it("catches a slow fade once it adds up, even when each frame changes too little", () => {
    const levels = new Map([["b", 0.1]]);
    const drawn = new Map(levels);
    updateCharge(levels, null, [], 1 / 60, false);
    expect(glowDiffers(drawn, levels)).toBe(false);
    for (let i = 0; i < 60; i++) updateCharge(levels, null, [], 1 / 60, false);
    expect(glowDiffers(drawn, levels)).toBe(true);
  });
});
