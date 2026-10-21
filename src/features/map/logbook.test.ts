import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { markRead, readKeys, resetLogbook, subscribeRead } from "./logbook";

describe("logbook", () => {
  let store: Map<string, string>;
  beforeEach(() => {
    store = new Map();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => store.set(k, v),
    });
    vi.stubGlobal("window", { addEventListener: () => {}, removeEventListener: () => {} });
    resetLogbook();
  });
  afterEach(() => vi.unstubAllGlobals());

  it("remembers what was read across visits", () => {
    markRead("case:roswell");
    markRead("story:upper-lake-12");
    resetLogbook();
    expect([...readKeys()]).toEqual(["case:roswell", "story:upper-lake-12"]);
  });

  it("returns the same set until something new is read, and tells listeners", () => {
    const fn = vi.fn();
    subscribeRead(fn);
    markRead("case:roswell");
    const first = readKeys();
    markRead("case:roswell");
    expect(readKeys()).toBe(first);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("starts empty when the stored value is damaged or storage is blocked", () => {
    store.set("um_read", "{not json");
    expect(readKeys().size).toBe(0);
    resetLogbook();
    vi.stubGlobal("localStorage", {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("blocked");
      },
    });
    markRead("case:roswell");
    expect(readKeys().has("case:roswell")).toBe(true);
  });
});
