import type { Metadata } from "next";
import { PageTop } from "@/components/PageTop";
import { TermsOfUse } from "@/features/legal/TermsOfUse";
import { env } from "@/lib/server/env";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms for using Uncanny Map and sharing stories on it, including permission to publish.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="page">
      <PageTop mapHref="/" />
      <TermsOfUse email={env.CONTACT_EMAIL ?? null} />
    </main>
  );
}
