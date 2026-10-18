import type { ReactNode } from "react";
import { ArticleTitle, SectionHeading } from "@/components/article";

/** Shared shell for the privacy policy and terms: title, last-updated date, and plain-English sections. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <article className="article legal">
      <span className="tag">Coldspot</span>
      <ArticleTitle variant="page">{title}</ArticleTitle>
      <p className="legal-updated">Last updated {updated}</p>
      {children}
    </article>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="legal-section">
      <SectionHeading variant="page">{title}</SectionHeading>
      <div className="prose">{children}</div>
    </section>
  );
}

/** "Email us at …" when CONTACT_EMAIL is set, otherwise the in-app ways to reach us. */
export function Contact({ email }: { email: string | null }) {
  return email ? (
    <>
      email us at <a href={`mailto:${email}`}>{email}</a>
    </>
  ) : (
    <>use the report button on the story, or delete it yourself in My stories</>
  );
}
