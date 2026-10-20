import { describe, expect, it } from "vitest";
import { buildPlaces } from "./places";

const info = (name: string) => ({ name, lat: 0, lon: 0, zoom: 3 });
const lookup = {
  countries: { india: info("India"), japan: info("Japan") },
  states: { "india/kerala": info("Kerala"), "india/goa": info("Goa") },
};
const at = (countryKey: string | null, stateKey: string | null = null) => ({ countryKey, stateKey });

describe("buildPlaces", () => {
  it("counts items per country, most first, and lists only states with 3+", () => {
    const items = [
      at("india", "india/kerala"),
      at("india", "india/kerala"),
      at("india", "india/kerala"),
      at("india", "india/goa"),
      at("japan"),
    ];
    const places = buildPlaces(items, lookup);
    expect(places.map((p) => [p.name, p.count])).toEqual([
      ["India", 4],
      ["Japan", 1],
    ]);
    expect(places[0]?.states.map((s) => [s.name, s.count])).toEqual([["Kerala", 3]]);
  });

  it("names cases at sea, and skips unknown or missing regions", () => {
    const places = buildPlaces([at("at-sea"), at("atlantis"), at(null)], lookup);
    expect(places.map((p) => p.name)).toEqual(["At sea"]);
  });
});
