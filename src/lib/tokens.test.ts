import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { PALETTE } from "./tokens";

const css = readFileSync(join(__dirname, "../styles/tokens.css"), "utf8");
const cssVar = (name: string) =>
  css
    .match(new RegExp(`--${name}:\\s*([^;]+);`))?.[1]
    ?.trim()
    .toLowerCase();

describe("tokens.ts matches tokens.css", () => {
  it.each([
    ["night", PALETTE.night],
    ["night-2", PALETTE.night2],
    ["ink", PALETTE.ink],
    ["ink-2", PALETTE.ink2],
    ["muted", PALETTE.muted],
    ["ice", PALETTE.ice],
    ["bone", PALETTE.bone],
  ])("--%s", (name, value) => {
    expect(cssVar(name)).toBe(value);
  });
});
