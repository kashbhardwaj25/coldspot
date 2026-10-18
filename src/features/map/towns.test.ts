import { describe, expect, it } from "vitest";
import { searchTowns, type Town } from "./towns";

const list: Town[] = [
  ["Dehradun", "Uttarakhand, India", 30.32, 78.05, ["Dehra Dun"]],
  ["Shimla", "Himachal Pradesh, India", 31.1, 77.17, ["Simla"]],
  ["Mount Abu", "Rajasthan, India", 24.59, 72.72],
  ["New Delhi", "Delhi, India", 28.6, 77.2],
  ["Delhi", "Delhi, India", 28.7, 77.2],
  ["São Paulo", "Brazil", -23.55, -46.63],
];
const names = (q: string) => searchTowns(list, q).map((t) => t[0]);

describe("searchTowns", () => {
  it("waits for two letters", () => {
    expect(names("d")).toEqual([]);
  });

  it("puts names that start with the query first", () => {
    expect(names("del")).toEqual(["Delhi", "New Delhi"]);
  });

  it("finds a later word, and older names", () => {
    expect(names("abu")).toEqual(["Mount Abu"]);
    expect(names("simla")).toEqual(["Shimla"]);
    expect(names("dehra dun")).toEqual(["Dehradun"]);
  });

  it("ignores accents and case", () => {
    expect(names("SAO PAU")).toEqual(["São Paulo"]);
  });
});
