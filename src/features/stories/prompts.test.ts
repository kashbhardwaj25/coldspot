import { describe, expect, it } from "vitest";
import { nextPrompt, STORY_PROMPTS } from "./prompts";

describe("nextPrompt", () => {
  it("never repeats the current prompt and stays in range", () => {
    for (const r of [0, 0.5, 0.999]) {
      for (let i = 0; i < STORY_PROMPTS.length; i++) {
        const n = nextPrompt(i, () => r);
        expect(n).not.toBe(i);
        expect(n).toBeGreaterThanOrEqual(0);
        expect(n).toBeLessThan(STORY_PROMPTS.length);
      }
    }
  });
});
