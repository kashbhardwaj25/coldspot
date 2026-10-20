import Link from "next/link";
import { Wordmark } from "./Wordmark";

export function PageTop({ mapHref }: { mapHref: string }) {
  return (
    <header className="page-top">
      <Link className="brand" href="/">
        <Wordmark tagline="Something happened here" />
      </Link>
      <Link className="btn primary" href={mapHref}>
        Open on the map
      </Link>
    </header>
  );
}
