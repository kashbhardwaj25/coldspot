import { describe, expect, it } from "vitest";
import { blockedContent, blur, firstSentence, paragraphs, submission, type Submission } from "./validation";

const STORY = "We were driving back from the fair when a light came over the ridge and stopped above the road.";

function draft(story: string, extra: Partial<Submission> = {}): Submission {
  return submission.parse({
    category: "sky",
    place: "Bhuj",
    story: `${STORY} ${story}`,
    lat: 23.25,
    lon: 69.67,
    ...extra,
  });
}

const blocked = (story: string, extra?: Partial<Submission>) => blockedContent(draft(story, extra));

describe("blockedContent: links", () => {
  it.each([
    "See https://example.org for more.",
    "Look up www.example.net later.",
    "Posted on example.com yesterday.",
    "Search EXAMPLE.COM for it.",
    "Ask on mysite.in, they know.",
    "Try mysite.co for the photos.",
  ])("blocks %j", (text) => {
    expect(blocked(text)).toMatch(/links/);
  });

  it.each([
    "It was late at night.In the morning it was gone.",
    "We asked the company.Co-workers had seen it too.",
    "We waited. In the end it left.",
  ])("allows %j", (text) => {
    expect(blocked(text)).toBeNull();
  });

  it("checks the place and witness fields too", () => {
    expect(blocked("", { place: "example.com" })).toMatch(/links/);
    expect(blocked("", { witnesses: "see www.example.org" })).toMatch(/links/);
    expect(blocked("", { penName: "example.com" })).toMatch(/links/);
  });

  it("limits the pen name to 40 characters", () => {
    expect(() => draft("", { penName: "x".repeat(41) })).toThrow(/pen name/);
    expect(draft("", { penName: "  Night walker  " }).penName).toBe("Night walker");
  });
});

describe("blockedContent: phone numbers", () => {
  it.each([
    "Call 9876543210 if you see it.",
    "Call +91 98765 43210 if you see it.",
    "Call 98765-43210 if you see it.",
    "The office number was 011-2345-6789.",
  ])("blocks %j", (text) => {
    expect(blocked(text)).toMatch(/phone/);
  });

  it.each([
    "It happened every winter, 2003 - 2004.",
    "It happened in 2003-2004 and again in 2010.",
    "We saw it in 1998 1999 2000 and never again.",
    "About 300 people saw it from 2 km away.",
  ])("allows %j", (text) => {
    expect(blocked(text)).toBeNull();
  });
});

describe("submission", () => {
  it("rejects stories under 80 characters", () => {
    const r = submission.safeParse({ category: "sky", place: "Bhuj", story: "Too short.", lat: 23, lon: 69 });
    expect(r.success).toBe(false);
  });

  it("rejects years in the future", () => {
    const year = String(new Date().getFullYear() + 1);
    expect(submission.safeParse({ category: "sky", place: "Bhuj", story: STORY, lat: 23, lon: 69, year }).success).toBe(
      false,
    );
  });
});

describe("blur", () => {
  it("rounds to a 0.05 degree grid", () => {
    expect(blur(23.2519)).toBe(23.25);
    expect(blur(69.674)).toBe(69.65);
    expect(blur(-12.376)).toBe(-12.4);
  });
});

describe("firstSentence", () => {
  it("returns the first full sentence", () => {
    expect(firstSentence("The dogs went quiet all at once. Then the lights came.")).toBe(
      "The dogs went quiet all at once.",
    );
  });

  it("skips sentences under 20 characters", () => {
    expect(firstSentence("It was cold. The dogs went quiet all at once.")).toBe(
      "It was cold. The dogs went quiet all at once.",
    );
  });
});

describe("paragraphs", () => {
  it("splits on blank lines and tidies whitespace", () => {
    expect(paragraphs("One  line\nwrapped.\n\n \nTwo.")).toEqual(["One line wrapped.", "Two."]);
  });
});
