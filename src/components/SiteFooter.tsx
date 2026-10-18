import Link from "next/link";
import { STORIES_ENABLED } from "@/lib/features";

/** Footer on every page outside the map: where to go next, and the legal pages. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav aria-label="Site">
        <Link href="/">The map</Link>
        <Link href="/cases">All famous cases</Link>
        {STORIES_ENABLED && <Link href="/my-stories">My stories</Link>}
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
      <p>Coldspot · Something happened here</p>
    </footer>
  );
}
