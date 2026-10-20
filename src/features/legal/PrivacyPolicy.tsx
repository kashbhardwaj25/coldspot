import Link from "next/link";
import { Contact, LegalPage, LegalSection } from "./Legal";

export const PRIVACY_UPDATED = "18 October 2026";

/** What Uncanny Map collects and why, written to match what the code actually does. */
export function PrivacyPolicy({ email }: { email: string | null }) {
  return (
    <LegalPage title="Privacy policy" updated={PRIVACY_UPDATED}>
      <div className="prose">
        <p>
          Uncanny Map is a globe of unexplained encounters. We collect as little as we can: you can read every case and
          story without an account, and we never sell or share your information for advertising.
        </p>
      </div>
      <LegalSection title="When you read">
        <p>
          Reading needs no account and sets no tracking cookies. If analytics are switched on, we use Cloudflare Web
          Analytics, which counts visits without cookies and without identifying you.
        </p>
      </LegalSection>
      <LegalSection title="When you sign in">
        <p>
          Sharing, echoing and reporting stories need a Google sign-in, to keep out spam. We ask Google only for your
          email address and keep only that and Google&apos;s account ID for you. We don&apos;t receive or store your
          name, photo, contacts or Google password.
        </p>
        <p>
          Signing in sets one cookie that keeps you signed in for up to 30 days. We don&apos;t record your IP address or
          browser with it.
        </p>
      </LegalSection>
      <LegalSection title="When you share a story">
        <p>We store what you write in the form: your story, its place, year, time, witnesses and pen name.</p>
        <p>
          Your pin is rounded to an area of about 5 km before it&apos;s saved. The exact spot never leaves your device.
          If you use &ldquo;Use my location&rdquo;, your browser asks first, and the location is only used to move the
          pin.
        </p>
        <p>
          Your story is shown with your pen name, or as &ldquo;Anonymous&rdquo;. Your email address and account are
          never shown with it. We keep a scrambled, one-way code made from your IP address next to the story, only to
          limit how many stories can be shared in a day. It can&apos;t be turned back into your address.
        </p>
        <p>
          While you sign in, a draft of your story is kept in your own browser so it isn&apos;t lost. It&apos;s deleted
          when you send it, or after a day.
        </p>
      </LegalSection>
      <LegalSection title="Echoes and reports">
        <p>
          When you echo or report a story, we record which account did it, so each person counts once. Echo counts are
          public; who echoed is not. Reports are seen only by us.
        </p>
      </LegalSection>
      <LegalSection title="Who else is involved">
        <p>
          Google handles sign-in. Cloudflare protects the site, runs the spam check on the share form (Turnstile) and,
          if switched on, the visit counts. Our hosting provider stores the database. Each only gets what it needs to do
          that job.
        </p>
      </LegalSection>
      <LegalSection title="How long we keep things">
        <p>
          We keep your account until you delete it, and your stories until you delete them or we remove them. Stories
          that aren&apos;t published are kept so you can see their status, until you delete them.
        </p>
      </LegalSection>
      <LegalSection title="Your choices">
        <p>
          In <Link href="/my-stories">My stories</Link> you can see everything you&apos;ve shared, delete any story, or
          delete your account. Deleting your account removes your stories, your echoes, your reports and your email
          address straight away.
        </p>
        <p>
          If a story names you, describes your home or is about you, and you want it taken down,{" "}
          <Contact email={email} />. We aim to reply within 7 days.
        </p>
      </LegalSection>
      <LegalSection title="Children">
        <p>
          Uncanny Map is meant for adults. If you&apos;re under 18, please don&apos;t create an account or share a
          story.
        </p>
      </LegalSection>
      <LegalSection title="Changes">
        <p>
          If we change this policy, we&apos;ll update the date at the top. If a change affects how we use what
          you&apos;ve already shared, we&apos;ll say so on the site first.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
