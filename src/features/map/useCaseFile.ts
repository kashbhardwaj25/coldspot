import { useEffect, useState } from "react";
import type { CaseDetail, CaseItem, CaseSummary } from "@/lib/types";

// One request per case per visit, shared by prefetching and opening.
const requests = new Map<string, Promise<CaseDetail>>();

/** Starts fetching a case file's full text, or returns the request already under way. */
export function loadCaseFile(slug: string): Promise<CaseDetail> {
  let request = requests.get(slug);
  if (!request) {
    request = fetch(`/api/cases/${encodeURIComponent(slug)}`).then((r) => {
      if (!r.ok) throw new Error(`Case file ${slug}: ${r.status}`);
      return r.json() as Promise<CaseDetail>;
    });
    // Let a failed request be retried next time.
    request.catch(() => requests.delete(slug));
    requests.set(slug, request);
  }
  return request;
}

type Loaded = { slug: string; result: CaseItem | "error" };

/** The full case file for a case on the map: the case itself once loaded, or "loading" / "error". */
export function useCaseFile(c: CaseSummary): CaseItem | "loading" | "error" {
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  useEffect(() => {
    let current = true;
    loadCaseFile(c.slug).then(
      (detail) => current && setLoaded({ slug: c.slug, result: { ...c, ...detail } }),
      () => current && setLoaded({ slug: c.slug, result: "error" }),
    );
    return () => {
      current = false;
    };
  }, [c]);
  return loaded?.slug === c.slug ? loaded.result : "loading";
}
