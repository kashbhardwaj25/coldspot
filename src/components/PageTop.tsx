import Link from "next/link";
import { HEAVY_PAGE } from "@/lib/nav";
import { Wordmark } from "./Wordmark";

export function PageTop({ mapHref }: { mapHref: string }) {
  return (
    <header className="page-top">
      <Link className="brand" href="/" prefetch={HEAVY_PAGE}>
        <Wordmark tagline="Something happened here" />
      </Link>
      <Link className="btn primary" href={mapHref} prefetch={HEAVY_PAGE}>
        Open on the map
      </Link>
    </header>
  );
}
