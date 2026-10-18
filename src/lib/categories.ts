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

/** `hidden`: was published, then hidden automatically after enough reports, until an admin reviews it. */
export const STORY_STATUS_KEYS = ["pending", "approved", "rejected", "hidden"] as const;
export type StoryStatus = (typeof STORY_STATUS_KEYS)[number];

/** Why someone reported a story. The labels mirror the content rules shown on the share form. */
export const REPORT_REASONS = {
  "names-or-address": "It names a real person or gives an exact address",
  harm: "It's about crime, violence or someone getting hurt",
  selling: "It sells remedies, rituals or charms",
  spam: "It's spam, or not a real experience",
  other: "Something else breaks the rules",
} as const;
export type ReportReason = keyof typeof REPORT_REASONS;
export const REPORT_REASON_KEYS = Object.keys(REPORT_REASONS) as [ReportReason, ...ReportReason[]];
