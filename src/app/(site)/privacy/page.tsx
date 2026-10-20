import type { Metadata } from "next";
import { PageTop } from "@/components/PageTop";
import { PrivacyPolicy } from "@/features/legal/PrivacyPolicy";
import { env } from "@/lib/server/env";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What Uncanny Map collects, why, and how to delete your stories or your account.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <PageTop mapHref="/" />
      <PrivacyPolicy email={env.CONTACT_EMAIL ?? null} />
    </main>
  );
}
