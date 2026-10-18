import Link from "next/link";
import type { CSSProperties } from "react";
import { Paragraphs } from "@/components/article";
import { ConfirmButton } from "@/components/ui/ConfirmButton";
import { CATEGORIES, REPORT_REASONS, type ReportReason } from "@/lib/categories";
import { remove, requeue, restore, unpublish } from "./actions";
import type { AdminStory } from "./queries";
import { StoryMeta } from "./StoryMeta";

type Props = { stories: AdminStory[] };

/** Published, hidden or rejected stories, each with the actions that fit its state. */
export function StoryRows({ stories }: Props) {
  return stories.map((s) => (
    <article key={s.id} className="review" style={{ "--tc": CATEGORIES[s.category].color } as CSSProperties}>
      <StoryMeta story={s} />
      <h2 className="review-title">
        {s.place}
        {s.region ? `, ${s.region}` : ""}
      </h2>
      {s.status === "hidden" ? <Paragraphs items={s.body} /> : <p className="review-hook">{s.hook}</p>}
      {s.reports.length > 0 && <ReportSummary reasons={s.reports} />}
      <div className="review-actions">
        {s.status === "approved" && s.slug && (
          <Link className="btn" href={`/story/${s.slug}`}>
            View
          </Link>
        )}
        <Actions story={s} />
      </div>
    </article>
  ));
}

function Actions({ story: s }: { story: AdminStory }) {
  const id = <input type="hidden" name="id" value={s.id} />;
  switch (s.status) {
    case "approved":
      return (
        <form action={unpublish}>
          {id}
          <ConfirmButton
            label="Unpublish"
            title={`Unpublish the story from ${s.place}?`}
            description="It comes off the map and its page straight away. You can send it back to the queue later from Rejected."
          />
        </form>
      );
    case "hidden":
      return (
        <>
          <form action={restore}>
            {id}
            <button className="btn primary" type="submit">
              Restore and clear reports
            </button>
          </form>
          <form action={remove}>
            {id}
            <ConfirmButton
              label="Keep it off the site"
              title="Keep this story off the site?"
              description="It moves to Rejected. The writer sees it as not published."
            />
          </form>
        </>
      );
    case "rejected":
      return (
        <form action={requeue}>
          {id}
          <button className="btn" type="submit">
            Back to the queue
          </button>
        </form>
      );
    case "pending":
      return null;
  }
}

/** "2 × It names a real person…", most common reason first. */
function ReportSummary({ reasons }: { reasons: ReportReason[] }) {
  const counts = new Map<ReportReason, number>();
  for (const r of reasons) counts.set(r, (counts.get(r) ?? 0) + 1);
  return (
    <ul className="report-summary" aria-label={`${reasons.length} reports`}>
      {[...counts]
        .sort((a, b) => b[1] - a[1])
        .map(([reason, n]) => (
          <li key={reason}>
            <b>{n} ×</b> {REPORT_REASONS[reason]}
          </li>
        ))}
    </ul>
  );
}
