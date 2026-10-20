import { describe, expect, it } from "vitest";
import { trustedIp } from "./proxy";

const headers = (h: Record<string, string>) => (name: string) => h[name] ?? null;
const forged = headers({
  "cf-connecting-ip": "1.1.1.1",
  "x-forwarded-for": "6.6.6.6, 2.2.2.2",
  "x-real-ip": "6.6.6.6",
});

describe("trustedIp", () => {
  it("reads nothing without a trusted proxy, since any header can be forged", () => {
    expect(trustedIp("none", forged)).toBeNull();
  });

  it("reads only cf-connecting-ip behind Cloudflare", () => {
    expect(trustedIp("cloudflare", forged)).toBe("1.1.1.1");
    expect(trustedIp("cloudflare", headers({ "x-forwarded-for": "2.2.2.2" }))).toBeNull();
  });

  it("reads the last x-forwarded-for entry, the one our proxy added", () => {
    expect(trustedIp("forwarded", forged)).toBe("2.2.2.2");
    expect(trustedIp("forwarded", headers({ "x-forwarded-for": " 3.3.3.3 " }))).toBe("3.3.3.3");
    expect(trustedIp("forwarded", headers({}))).toBeNull();
  });
});
