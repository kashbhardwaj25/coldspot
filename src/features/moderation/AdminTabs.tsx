import Link from "next/link";
import type { StoryStatus } from "@/lib/categories";

export const TABS = [
  { status: "pending", label: "Waiting" },
  { status: "approved", label: "Published" },
  { status: "hidden", label: "Hidden by reports" },
  { status: "rejected", label: "Rejected" },
] as const satisfies readonly { status: StoryStatus; label: string }[];

type Props = { current: StoryStatus; counts: Record<StoryStatus, number> };

/** The admin's story lists by status, as links so each list has its own URL. */
export function AdminTabs({ current, counts }: Props) {
  return (
    <nav className="admin-tabs" aria-label="Stories by status">
      {TABS.map((t) => (
        <Link
          key={t.status}
          href={t.status === "pending" ? "/admin" : `/admin?tab=${t.status}`}
          aria-current={t.status === current ? "page" : undefined}
          data-attention={t.status === "hidden" && counts.hidden > 0 ? "" : undefined}
        >
          {t.label} <b>{counts[t.status]}</b>
        </Link>
      ))}
    </nav>
  );
}
