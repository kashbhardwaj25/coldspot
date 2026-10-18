import { notFound } from "next/navigation";
import { AdminTabs, TABS } from "@/features/moderation/AdminTabs";
import { LoginForm } from "@/features/moderation/LoginForm";
import { getAdminStories, getStoryCounts } from "@/features/moderation/queries";
import { ReviewCard } from "@/features/moderation/ReviewCard";
import { isAdmin } from "@/features/moderation/session";
import { StoryRows } from "@/features/moderation/StoryRows";
import { STORIES_ENABLED } from "@/lib/features";

export const dynamic = "force-dynamic";

const EMPTY = {
  pending: "Nothing waiting. The queue is quiet.",
  approved: "Nothing published yet.",
  hidden: "No stories are hidden by reports.",
  rejected: "Nothing rejected.",
} as const;

type Props = { searchParams: Promise<{ tab?: string }> };

export default async function AdminPage({ searchParams }: Props) {
  if (!STORIES_ENABLED) notFound();
  if (!(await isAdmin())) {
    return (
      <>
        <h1 className="s-title">Review queue</h1>
        <LoginForm />
      </>
    );
  }

  const tab = (await searchParams).tab;
  const status = TABS.find((t) => t.status === tab)?.status ?? "pending";
  const stories = getAdminStories(status);

  return (
    <>
      <h1 className="s-title">Stories</h1>
      <AdminTabs current={status} counts={getStoryCounts()} />
      {stories.length === 0 && <p className="empty">{EMPTY[status]}</p>}
      {status === "pending" ? stories.map((s) => <ReviewCard key={s.id} story={s} />) : <StoryRows stories={stories} />}
    </>
  );
}
