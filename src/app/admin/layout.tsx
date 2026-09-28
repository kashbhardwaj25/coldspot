import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/brand";
import { logout } from "@/features/moderation/auth";
import { isAdmin } from "@/lib/server/security";

export const metadata: Metadata = { title: "Review queue", robots: { index: false } };

/**
 * Shared shell for every admin page. It only decides whether to show "Sign out": layouts render in parallel
 * with pages, so each page and each action still checks `isAdmin()` itself.
 */
export default async function AdminLayout({ children }: { children: ReactNode }) {
  const admin = await isAdmin();
  return (
    <main className="admin">
      <div className="admin-head">
        <Link className="brand" href="/">
          <b>
            <Logo />
            COLDSPOT
          </b>
          <span>Admin</span>
        </Link>
        {admin && (
          <form action={logout}>
            <button className="btn" type="submit">
              Sign out
            </button>
          </form>
        )}
      </div>
      {children}
    </main>
  );
}
