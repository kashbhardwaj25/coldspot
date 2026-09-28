import type { ReactNode } from "react";

/**
 * Where an article is shown. On its own page the title is the `h1`; in a sheet it's an `h2` that labels the
 * dialog (`#sheetTitle`), and section headings move down a level to match.
 */
export type ArticleVariant = "page" | "sheet";

export function ArticleTitle({ variant, children }: { variant: ArticleVariant; children: ReactNode }) {
  return variant === "page" ? (
    <h1 className="s-title">{children}</h1>
  ) : (
    <h2 className="s-title" id="sheetTitle">
      {children}
    </h2>
  );
}

export function SectionHeading({ variant, children }: { variant: ArticleVariant; children: ReactNode }) {
  return variant === "page" ? <h2 className="h">{children}</h2> : <h3 className="h">{children}</h3>;
}

export function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="prose">
      {items.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

/** Label and value pairs under an article. */
export function Fields({ items }: { items: [label: string, value: ReactNode][] }) {
  return (
    <dl className="fields">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
