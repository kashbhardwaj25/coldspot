import Link from "next/link";
import { ArticleTitle, SectionHeading } from "@/components/article";
import { ConfirmButton } from "@/components/ui/ConfirmButton";
import type { StoryStatus } from "@/lib/categories";
import { deleteMyAccount, deleteMyStory, signOut } from "./actions";
import type { MyStory } from "./queries";
import type { Viewer } from "./session";
import { SignInButton } from "./SignInButton";

const STATUS: Record<StoryStatus, string> = {
  pending: "Waiting for review",
  approved: "Published",
  rejected: "Not published",
  hidden: "Hidden while we review reports",
};

type Props = { viewer: Viewer | null; stories: MyStory[] };

/** Your own stories with their review status, and the controls to delete them or the whole account. */
export function MyStories({ viewer, stories }: Props) {
  if (!viewer) {
    return (
      <article className="article">
        <ArticleTitle variant="page">My stories</ArticleTitle>
        <div className="prose">
          <p>Sign in to see the stories you&apos;ve shared and whether they&apos;ve been published.</p>
        </div>
        <SignInButton />
      </article>
    );
  }

  return (
    <article className="article">
      <ArticleTitle variant="page">My stories</ArticleTitle>
      <div className="prose">
        <p>
          Signed in as <b>{viewer.email}</b>. Your email is never shown with your stories.
        </p>
      </div>
      {stories.length === 0 ? (
        <div className="prose">
          <p>
            You haven&apos;t shared a story yet. <Link href="/">Open the map</Link>, drag it to where it happened and
            choose Share a story.
          </p>
        </div>
      ) : (
        <ul className="my-stories">
          {stories.map((s) => (
            <li key={s.id} data-status={s.status}>
              <div className="my-head">
                <b>{s.place}</b>
                <span className="my-status">{STATUS[s.status]}</span>
              </div>
              <p>{s.hook}</p>
              <div className="my-actions">
                <span>Shared {s.sharedOn}</span>
                {s.status === "approved" && s.slug && <Link href={`/story/${s.slug}`}>View</Link>}
                <form action={deleteMyStory}>
                  <input type="hidden" name="id" value={s.id} />
                  <ConfirmButton
                    label="Delete"
                    className="link-btn"
                    title={`Delete your story from ${s.place}?`}
                    description="It disappears from the map and its page straight away. This can't be undone."
                  />
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
      <section className="related">
        <SectionHeading variant="page">Account</SectionHeading>
        <div className="my-account">
          <form action={signOut}>
            <button type="submit" className="btn">
              Sign out
            </button>
          </form>
          <form action={deleteMyAccount}>
            <ConfirmButton
              label="Delete my account"
              title="Delete your account?"
              description="This removes every story you've shared, your echoes and your email address. It can't be undone."
            />
          </form>
        </div>
        <p className="note">Deleting your account removes your stories, your echoes and your email address.</p>
      </section>
    </article>
  );
}
