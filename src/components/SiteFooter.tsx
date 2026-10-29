import Link from "next/link";
import { HEAVY_PAGE, SITE_LINKS } from "@/lib/nav";

/** Footer on every page outside the map: where to go next, and the legal pages. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav aria-label="Site">
        {SITE_LINKS.map((l) => (
          <Link key={l.href} href={l.href} prefetch={l.heavy ? HEAVY_PAGE : undefined}>
            {l.label}
          </Link>
        ))}
      </nav>
      <p>Uncanny Map · Something happened here</p>
    </footer>
  );
}
