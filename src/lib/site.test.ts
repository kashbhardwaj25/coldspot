import { describe, expect, it } from "vitest";
import { isIndexable } from "./site";

describe("isIndexable", () => {
  it.each(["https://coldspot.in", "https://www.example.com/"])("indexes a real domain: %s", (url) => {
    expect(isIndexable(url)).toBe(true);
  });

  it.each(["http://localhost:3000", "http://203.0.113.10", "http://[2001:db8::1]"])("not %s", (url) => {
    expect(isIndexable(url)).toBe(false);
  });
});
