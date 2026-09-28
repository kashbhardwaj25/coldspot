import type { ReactNode } from "react";
import { ArticleTitle, Fields, Paragraphs, type ArticleVariant } from "@/components/article";
import type { StoryItem } from "@/lib/types";

type Props = {
  s: StoryItem;
  variant: ArticleVariant;
  /** The fourth field: echoes on the page, the location note in the sheet. */
  lastField: [label: string, value: ReactNode];
  /** Shown after the fields and before the sample-story note. */
  children?: ReactNode;
};

/** A person's story. Sample stories always carry a note saying they aren't real reports. */
export function StoryArticle({ s, variant, lastField, children }: Props) {
  return (
    <>
      <div>
        <ArticleTitle variant={variant}>{s.place}</ArticleTitle>
        <div className="s-sub">
          <span>
            {s.region}
            {s.year ? ` · ${s.year}` : ""}
          </span>
        </div>
      </div>
      <p className="quote">{s.hook}</p>
      <Paragraphs items={s.body} />
      <Fields
        items={[
          ["Year", s.year ?? "Not given"],
          ["Time", s.timeLabel ?? "Not given"],
          ["Witnesses", s.witnesses ?? "Not given"],
          lastField,
        ]}
      />
      {children}
      {s.isSample && (
        <p className="note">This is a sample story written to show the format. It is not a real report.</p>
      )}
    </>
  );
}
