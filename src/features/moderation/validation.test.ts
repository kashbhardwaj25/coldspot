import { describe, expect, it } from "vitest";
import { review, slugify } from "./validation";

const ok = {
  id: "12",
  category: "sky",
  place: " Munsiyari ",
  region: "Uttarakhand",
  hook: "Three lights rose from the valley.",
  story: "x".repeat(100),
  penName: "",
};

describe("review", () => {
  it("accepts a reviewer's edits and tidies them", () => {
    const r = review.parse(ok);
    expect(r).toMatchObject({ id: 12, place: "Munsiyari", penName: "" });
  });

  it.each([
    ["no id", { id: "" }],
    ["an unknown category", { category: "ghosts" }],
    ["a one-letter place", { place: "B" }],
    ["a long opening line", { hook: "x".repeat(241) }],
    ["a short story", { story: "Too short." }],
    ["a long pen name", { penName: "x".repeat(41) }],
  ])("rejects %s", (_label, change) => {
    expect(review.safeParse({ ...ok, ...change }).success).toBe(false);
  });
});

describe("slugify", () => {
  it("makes a URL-safe slug", () => {
    expect(slugify("Upper Lake, Bhopal")).toBe("upper-lake-bhopal");
    expect(slugify("Kōdinhi")).toBe("kodinhi");
    expect(slugify("!!!")).toBe("story");
  });
});
