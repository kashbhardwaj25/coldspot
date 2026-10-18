import Link from "next/link";
import { SITE_LINKS } from "@/lib/nav";

/** Footer on every page outside the map: where to go next, and the legal pages. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav aria-label="Site">
        {SITE_LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <p>Coldspot · Something happened here</p>
    </footer>
  );
}
