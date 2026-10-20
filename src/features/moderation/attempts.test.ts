import { describe, expect, it } from "vitest";
import { AttemptLimiter } from "./attempts";

const MIN = 60_000;

describe("AttemptLimiter", () => {
  it("locks a key out after too many failures, until the window ends", () => {
    const l = new AttemptLimiter(3, 15 * MIN);
    for (let i = 0; i < 3; i++) {
      expect(l.blockedFor("a", 0)).toBe(0);
      l.fail("a", 0);
    }
    expect(l.blockedFor("a", 1 * MIN)).toBe(14 * MIN);
    expect(l.blockedFor("b", 1 * MIN)).toBe(0);
    expect(l.blockedFor("a", 15 * MIN)).toBe(0);
  });

  it("starts counting again after the window", () => {
    const l = new AttemptLimiter(2, 10 * MIN);
    l.fail("a", 0);
    l.fail("a", 11 * MIN);
    expect(l.blockedFor("a", 11 * MIN)).toBe(0);
  });

  it("clears the count on a successful sign-in", () => {
    const l = new AttemptLimiter(2, 10 * MIN);
    l.fail("a", 0);
    l.fail("a", 0);
    l.succeed("a");
    expect(l.blockedFor("a", 0)).toBe(0);
  });
});
