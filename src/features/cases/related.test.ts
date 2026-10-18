import { describe, expect, it } from "vitest";
import type { CaseItem } from "@/lib/types";
import { relatedCases, titleKey } from "./related";

const c = (slug: string, lat: number, lon: number, category: CaseItem["category"] = "sky"): CaseItem => ({
  kind: "case",
  slug,
  category,
  title: `The ${slug}`,
  region: "",
  lat,
  lon,
  dateLabel: "",
  status: "open",
  statusLabel: null,
  witnesses: "",
  hook: "",
  summary: [],
  explanation: "",
  wiki: null,
  featured: false,
  countryKey: null,
  stateKey: null,
});

describe("relatedCases", () => {
  const here = c("here", 0, 0);
  const all = [here, c("a", 0, 1), c("b", 0, 2), c("c", 0, 3), c("d", 0, 4), c("e", 0, 5), c("far-sky", 50, 50)];

  it("lists the four nearest cases, never the case itself", () => {
    expect(relatedCases(all, here).nearby.map((x) => x.slug)).toEqual(["a", "b", "c", "d"]);
  });

  it("adds same-category cases not already listed as nearby", () => {
    expect(relatedCases(all, here).sameCategory.map((x) => x.slug)).toEqual(["e", "far-sky"]);
  });
});

describe("titleKey", () => {
  it("ignores a leading 'The' when sorting", () => {
    expect(titleKey(c("Zebra", 0, 0))).toBe("zebra");
  });
});
