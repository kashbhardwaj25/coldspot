import { describe, expect, it } from "vitest";
import { casesOnThisDay, exactDate, yearOnThisDay } from "./onThisDay";

const day = (y: number, m: number, d: number) => new Date(y, m - 1, d);

describe("exactDate", () => {
  it("reads a day, a range of days, and nothing when there's no day", () => {
    expect(exactDate("13 March 1997")).toEqual({ from: 13, to: 13, month: 2, year: 1997 });
    expect(exactDate("26–28 December 1980")).toEqual({ from: 26, to: 28, month: 11, year: 1980 });
    expect(exactDate("Photographed on 4 December 1872")).toEqual({ from: 4, to: 4, month: 11, year: 1872 });
    expect(exactDate("July 1947")).toBeNull();
    expect(exactDate("Every autumn")).toBeNull();
  });
});

describe("yearOnThisDay", () => {
  it("matches the same day and month in an earlier year, including inside a range", () => {
    expect(yearOnThisDay("13 March 1997", day(2026, 3, 13))).toBe(1997);
    expect(yearOnThisDay("13 March 1997", day(2026, 3, 14))).toBeNull();
    expect(yearOnThisDay("26–28 December 1980", day(2026, 12, 27))).toBe(1980);
    expect(yearOnThisDay("2 April 2026", day(2026, 4, 2))).toBeNull();
  });
});

describe("casesOnThisDay", () => {
  it("lists today's cases with featured ones first", () => {
    const cases = [
      { slug: "a", dateLabel: "21 October 1978", featured: false },
      { slug: "b", dateLabel: "1 May 1990", featured: true },
      { slug: "c", dateLabel: "21 October 1966", featured: true },
    ];
    expect(casesOnThisDay(cases, day(2026, 10, 21)).map((c) => c.slug)).toEqual(["c", "a"]);
  });
});
