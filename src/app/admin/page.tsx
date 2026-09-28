import type { Metadata } from "next";
import Link from "next/link";
import { getPendingStories, getStoryCounts } from "@/db/queries";
import { CATEGORIES } from "@/lib/categories";
import { isAdmin } from "@/lib/server/security";
import { Logo } from "@/components/brand";
import { approve, logout, reject } from "./actions";
import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Review queue", robots: { index: false } };

export default async function AdminPage() {
  if (!(await isAdmin())) {
    return (
      <main className="admin">
        <Brand />
        <h1 className="s-title">Review queue</h1>
        <LoginForm />
      </main>
    );
  }

  const pending = getPendingStories();
  const counts = getStoryCounts();

  return (
    <main className="admin">
      <div className="admin-head">
        <Brand />
        <form action={logout}>
          <button className="btn" type="submit">
            Sign out
          </button>
        </form>
      </div>
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
        <article
          key={s.id}
          className="review"
          style={{ "--tc": CATEGORIES[s.category].color } as React.CSSProperties}
        >
          <div className="row">
            <span className="tag">
              <i />
              {CATEGORIES[s.category].label}
            </span>
            <span className="freq">
              #{s.id} · {s.createdAt.toLocaleString("en-IN")} · {s.lat.toFixed(2)}, {s.lon.toFixed(2)}
            </span>
          </div>
          <div className="prose">
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="meta">
            {s.year && <span>Year: {s.year}</span>}
            {s.timeLabel && <span>Time: {s.timeLabel}</span>}
            {s.witnesses && <span>Witnesses: {s.witnesses}</span>}
          </div>
          <form action={approve} className="form">
            <input type="hidden" name="id" value={s.id} />
            <div className="f2">
              <div className="field">
                <label htmlFor={`place-${s.id}`}>Place</label>
                <input id={`place-${s.id}`} name="place" defaultValue={s.place} required />
              </div>
              <div className="field">
                <label htmlFor={`region-${s.id}`}>Region</label>
                <input id={`region-${s.id}`} name="region" defaultValue={s.region} />
              </div>
            </div>
            <div className="field">
              <label htmlFor={`hook-${s.id}`}>Opening line (shown in the tuner card)</label>
              <textarea id={`hook-${s.id}`} name="hook" defaultValue={s.hook} style={{ minHeight: 70 }} required />
            </div>
            <div className="review-actions">
              <button className="btn primary" type="submit">
                Approve and publish
              </button>
              <button className="btn danger" type="submit" formAction={reject} formNoValidate>
                Reject
              </button>
            </div>
          </form>
        </article>
      ))}
    </main>
  );
}

function Brand() {
  return (
    <Link className="brand" href="/">
      <b>
        <Logo />
        COLDSPOT
      </b>
      <span>Admin</span>
    </Link>
  );
}
