import { LoginForm } from "@/features/moderation/LoginForm";
import { getPendingStories, getStoryCounts } from "@/features/moderation/queries";
import { ReviewCard } from "@/features/moderation/ReviewCard";
import { isAdmin } from "@/lib/server/security";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdmin())) {
    return (
      <>
        <h1 className="s-title">Review queue</h1>
        <LoginForm />
      </>
    );
  }

  const pending = getPendingStories();
  const counts = getStoryCounts();

  return (
    <>
      <div>
        <h1 className="s-title">Review queue</h1>
        <div className="stats" style={{ marginTop: 10 }}>
          <span>
            <b>{counts.pending}</b> waiting
          </span>
          <span>
            <b>{counts.approved}</b> live
          </span>
          <span>
            <b>{counts.rejected}</b> rejected
          </span>
        </div>
      </div>
      {pending.length === 0 && <p className="empty">Nothing waiting. The queue is quiet.</p>}
      {pending.map((s) => (
        <ReviewCard key={s.id} story={s} />
      ))}
    </>
  );
}
