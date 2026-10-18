import { CATEGORIES } from "@/lib/categories";
import type { AdminStory } from "./queries";

/** The facts a reviewer reads but doesn't edit: when it came in, where, and the writer's own details. */
export function StoryMeta({ story: s }: { story: AdminStory }) {
  return (
    <>
      <div className="row">
        <span className="tag">
          <i />
          {CATEGORIES[s.category].label}
        </span>
        <span className="freq">
          #{s.id} · shared {s.sharedOn} · {s.lat.toFixed(2)}, {s.lon.toFixed(2)}
        </span>
      </div>
      <div className="meta">
        {s.year && <span>Year: {s.year}</span>}
        {s.timeLabel && <span>Time: {s.timeLabel}</span>}
        {s.witnesses && <span>Witnesses: {s.witnesses}</span>}
        <span>Pen name: {s.penName ?? "Anonymous"}</span>
      </div>
    </>
  );
}
