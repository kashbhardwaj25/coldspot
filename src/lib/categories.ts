export const CATEGORY_KEYS = ["sky", "visitors", "creatures", "voices", "places"] as const;
export type Category = (typeof CATEGORY_KEYS)[number];

export const CATEGORIES: Record<Category, { label: string; color: string }> = {
  sky: { label: "Sky", color: "#86BCE8" },
  visitors: { label: "Visitors", color: "#C5A2EE" },
  creatures: { label: "Creatures", color: "#92C99A" },
  voices: { label: "Voices & sounds", color: "#E9B45E" },
  places: { label: "Places", color: "#E3836A" },
};

export const CASE_STATUS_KEYS = ["open", "disputed", "explained"] as const;
export type CaseStatus = (typeof CASE_STATUS_KEYS)[number];

export const CASE_STATUS_LABELS: Record<CaseStatus, string> = {
  open: "Unexplained",
  disputed: "Disputed",
  explained: "Explained",
};

export const STORY_STATUS_KEYS = ["pending", "approved", "rejected"] as const;
export type StoryStatus = (typeof STORY_STATUS_KEYS)[number];
