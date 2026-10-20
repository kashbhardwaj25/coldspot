import Link from "next/link";
import { Contact, LegalPage, LegalSection } from "./Legal";

export const TERMS_UPDATED = "18 October 2026";

/** The terms people agree to when they share a story, including permission to publish it. */
export function TermsOfUse({ email }: { email: string | null }) {
  return (
    <LegalPage title="Terms of use" updated={TERMS_UPDATED}>
      <div className="prose">
        <p>
          These terms cover using Uncanny Map and sharing stories on it. By using the site you agree to them.
          They&apos;re written in plain English; if anything is unclear, <Contact email={email} />.
        </p>
      </div>
      <LegalSection title="What Uncanny Map is">
        <p>
          Famous cases set out what witnesses reported and the explanations that have been offered, without taking a
          side. People&apos;s stories are personal accounts, shared in good faith and reviewed before they appear, but
          not verified. Nothing on Uncanny Map is professional, medical or safety advice.
        </p>
      </LegalSection>
      <LegalSection title="Your stories are yours">
        <p>You keep the rights to everything you write.</p>
        <p>
          By sharing a story, you give Uncanny Map permission to publish it on the site, with your pen name or as
          Anonymous, and to show it in previews and in posts about the site on social media. This permission is
          worldwide, free and not exclusive: you can share your story anywhere else too.
        </p>
        <p>
          Before publishing, we may make small edits: fixing typos, shortening the opening line, or removing names and
          details that break the rules below. We won&apos;t change what happened in your story.
        </p>
        <p>
          If we ever want to use your story outside Uncanny Map, such as in a podcast, a book, a film or a narrated
          version, we&apos;ll ask you first, and offer you a share of what we earn from it. Nothing like that happens
          without your yes.
        </p>
        <p>
          You can delete your story at any time in <Link href="/my-stories">My stories</Link>. It comes off the site
          straight away, though copies in search engines or posts already made may take a while to disappear.
        </p>
      </LegalSection>
      <LegalSection title="The rules for stories">
        <ul>
          <li>Share something you experienced, or that someone told you about first-hand.</li>
          <li>Leave out real names of living people, and exact addresses.</li>
          <li>Nothing about crime, violence, or anyone getting hurt.</li>
          <li>Don&apos;t accuse real people of witchcraft or anything else.</li>
          <li>No selling remedies, rituals, charms or stones, and no links or phone numbers.</li>
          <li>Only share what you have the right to share.</li>
        </ul>
        <p>
          Every story is reviewed before it&apos;s published. We may decline, edit or remove any story, and stories that
          several people report are hidden until we&apos;ve looked at them.
        </p>
      </LegalSection>
      <LegalSection title="Your account">
        <p>
          One account per person. Don&apos;t sign in as someone else or try to get around the limits on sharing, echoing
          or reporting. We may close accounts that break these terms.
        </p>
      </LegalSection>
      <LegalSection title="Our responsibility">
        <p>
          We work to keep Uncanny Map accurate, safe and available, but we provide it as it is, without guarantees.
          Stories reflect their writers&apos; views, not ours. As far as the law allows, we aren&apos;t liable for
          losses that come from using the site.
        </p>
      </LegalSection>
      <LegalSection title="Changes and the law">
        <p>
          If we change these terms, we&apos;ll update the date at the top; big changes will be announced on the site
          first. These terms are governed by the laws of India. See also our <Link href="/privacy">privacy policy</Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
