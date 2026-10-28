import { describe, expect, it } from "vitest";
import type { CaseItem } from "@/lib/types";
import { searchItems } from "./search";

const c = (slug: string, title: string, region: string, category: CaseItem["category"] = "sky"): CaseItem => ({
  kind: "case",
  body: "earth",
  slug,
  category,
  title,
  region,
  lat: 0,
  lon: 0,
  dateLabel: "1996",
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

const items = [
  c("varginha", "The Varginha Creature", "Varginha, Minas Gerais, Brazil", "visitors"),
  c("bendego", "The Bendegó Meteorite", "Monte Santo, Bahia, Brazil"),
  c("chir-batti", "Chir Batti", "Banni grasslands, Kutch, India"),
];
const slugs = (q: string) => searchItems(items, q).map((i) => i.slug);

describe("searchItems", () => {
  it("returns everything for an empty query", () => {
    expect(slugs("  ")).toEqual(["varginha", "bendego", "chir-batti"]);
  });

  it("matches names, places and categories, ignoring case", () => {
    expect(slugs("VARGINHA")).toEqual(["varginha"]);
    expect(slugs("brazil")).toEqual(["varginha", "bendego"]);
    expect(slugs("visitors")).toEqual(["varginha"]);
  });

  it("ignores accents", () => {
    expect(slugs("bendego")).toEqual(["bendego"]);
  });

  it("needs every word to match", () => {
    expect(slugs("brazil sky")).toEqual(["bendego"]);
    expect(slugs("india brazil")).toEqual([]);
  });

  it("matches status labels", () => {
    expect(slugs("unexplained kutch")).toEqual(["chir-batti"]);
  });
});
