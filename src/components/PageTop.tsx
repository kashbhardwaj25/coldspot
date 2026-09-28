import Link from "next/link";
import { Logo } from "./brand";

export function PageTop({ mapHref }: { mapHref: string }) {
  return (
    <header className="page-top">
      <Link className="brand" href="/">
        <b>
          <Logo />
          COLDSPOT
        </b>
        <span>Something happened here</span>
      </Link>
      <Link className="btn primary" href={mapHref}>
        Open on the map
      </Link>
    </header>
  );
}
