import { describe, expect, it } from "vitest";
import { formatCoords, haversineKm } from "./geo";

describe("formatCoords", () => {
  it("writes hemispheres instead of signs, to two places", () => {
    expect(formatCoords(23.2512, 77.3612)).toBe("23.25°N  77.36°E");
    expect(formatCoords(-33.8688, -151.2093)).toBe("33.87°S  151.21°W");
    expect(formatCoords(0, 0)).toBe("0.00°N  0.00°E");
  });
});

describe("haversineKm", () => {
  it("is zero for the same point", () => {
    expect(haversineKm(30, 78, 30, 78)).toBe(0);
  });

  it("matches known distances", () => {
    // Delhi to Mumbai is about 1,150 km; London to Paris about 344 km.
    expect(haversineKm(28.61, 77.21, 19.08, 72.88)).toBeCloseTo(1150, -1);
    expect(haversineKm(51.507, -0.128, 48.857, 2.352)).toBeCloseTo(344, -1);
  });

  it("goes the short way across the date line", () => {
    expect(haversineKm(0, 179.5, 0, -179.5)).toBeLessThan(120);
  });
});
