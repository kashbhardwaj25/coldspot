import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { clearDraft, loadDraft, saveDraft } from "./draft";

const center = { lat: 30.07, lon: 80.24 };

function form(fields: Record<string, string>) {
  const f = new FormData();
  for (const [k, v] of Object.entries(fields)) f.set(k, v);
  return f;
}

describe("share draft", () => {
  beforeEach(() => {
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => store.set(k, v),
      removeItem: (k: string) => store.delete(k),
    });
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  it("keeps the story fields and the pin, and drops anything else", () => {
    saveDraft(form({ place: "Munsiyari", story: "A light…", website: "spam", lat: "1" }), center);
    expect(loadDraft()).toEqual({ ...center, fields: { place: "Munsiyari", story: "A light…" } });
  });

  it("forgets a draft after a day", () => {
    vi.useFakeTimers();
    saveDraft(form({ place: "Munsiyari" }), center);
    vi.advanceTimersByTime(25 * 60 * 60 * 1000);
    expect(loadDraft()).toBeNull();
  });

  it("ignores damaged data and clears", () => {
    localStorage.setItem("cs_share_draft", "{not json");
    expect(loadDraft()).toBeNull();
    saveDraft(form({ place: "Munsiyari" }), center);
    clearDraft();
    expect(loadDraft()).toBeNull();
  });

  it("works when storage is blocked", () => {
    vi.stubGlobal("localStorage", {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("blocked");
      },
      removeItem: () => {
        throw new Error("blocked");
      },
    });
    expect(() => saveDraft(form({ place: "Munsiyari" }), center)).not.toThrow();
    expect(loadDraft()).toBeNull();
    expect(() => clearDraft()).not.toThrow();
  });
});
