import { PageTop } from "@/components/PageTop";

export default function NotFound() {
  return (
    <main className="page">
      <PageTop mapHref="/" />
      <article className="article">
        <h1 className="s-title">Nothing here but static</h1>
        <p className="prose">This page doesn&apos;t exist, or the story hasn&apos;t been approved yet.</p>
      </article>
    </main>
  );
}
