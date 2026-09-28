"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useTransition } from "react";
import { submitStory, toggleEcho, type SubmitState } from "@/app/actions";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";
import type { CaseItem, MapItem, Mode, StoryItem } from "@/lib/types";
import { itemName } from "@/lib/types";
import { caseStatusLabel, catColor } from "@/lib/format";

export type SheetState =
  | { type: "item"; item: MapItem }
  | { type: "list" }
  | { type: "share"; center: { lat: number; lon: number } };

export type EchoState = Record<string, { echoes: number; mine: boolean }>;

type Props = {
  sheet: SheetState;
  mode: Mode;
  cases: CaseItem[];
  stories: StoryItem[];
  echoState: EchoState;
  setEchoState: (fn: (prev: EchoState) => EchoState) => void;
  onClose: () => void;
  onPick: (item: MapItem) => void;
  onNearbyStories: (c: CaseItem) => void;
};

export function Sheet(props: Props) {
  const { sheet, onClose } = props;
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [onClose]);

  const tc =
    sheet.type === "item" ? ({ "--tc": catColor(sheet.item.category) } as React.CSSProperties) : undefined;

  let head: React.ReactNode;
  let body: React.ReactNode;
  if (sheet.type === "item" && sheet.item.kind === "case") {
    head = (
      <span className="tag">
        <i className="d" />
        {CATEGORIES[sheet.item.category].label} · Case file
      </span>
    );
    body = <CaseBody c={sheet.item} onNearby={props.onNearbyStories} stories={props.stories} />;
  } else if (sheet.type === "item" && sheet.item.kind === "story") {
    head = (
      <span className="tag">
        <i />
        {CATEGORIES[sheet.item.category].label}
        {sheet.item.isSample ? " · Sample story" : ""}
      </span>
    );
    body = <StoryBody s={sheet.item} echoState={props.echoState} setEchoState={props.setEchoState} />;
  } else if (sheet.type === "list") {
    const items: MapItem[] = props.mode === "famous" ? props.cases : props.stories;
    head = (
      <span className="tag">
        {props.mode === "famous" ? "Famous cases" : "People's stories"} · {items.length}
      </span>
    );
    body = <ListBody items={items} onPick={props.onPick} />;
  } else if (sheet.type === "share") {
    head = <span className="tag">Share a story</span>;
    body = <ShareBody center={sheet.center} onClose={onClose} />;
  }

  return (
    <>
      <div className="scrim show" onClick={onClose} />
      <section className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle" style={tc}>
        <div className="sheet-head">
          <span style={tc}>{head}</span>
          <button className="x" ref={closeRef} onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="sheet-body">{body}</div>
      </section>
    </>
  );
}

function CaseBody({ c, stories, onNearby }: { c: CaseItem; stories: StoryItem[]; onNearby: (c: CaseItem) => void }) {
  const nearby = stories.filter((s) => haversineKm(s.lat, s.lon, c.lat, c.lon) < 800).length;
  return (
    <>
      <div>
        <h2 className="s-title" id="sheetTitle">
          {c.title}
        </h2>
        <div className="s-sub">
          <span>
            {c.region} · {c.dateLabel}
          </span>
          <span className={`pill ${c.status}`}>{caseStatusLabel(c)}</span>
        </div>
      </div>
      <p className="quote">{c.hook}</p>
      <div>
        <p className="h">What was reported</p>
        <div className="prose">
          {c.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <div className="explain">
        <p className="h">Explanations offered</p>
        <div className="prose">
          <p>{c.explanation}</p>
        </div>
      </div>
      <dl className="fields">
        <div>
          <dt>When</dt>
          <dd>{c.dateLabel}</dd>
        </div>
        <div>
          <dt>Where</dt>
          <dd>{c.region}</dd>
        </div>
        <div>
          <dt>Witnesses</dt>
          <dd>{c.witnesses}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{caseStatusLabel(c)}</dd>
        </div>
      </dl>
      <div className="links">
        <button className="btn" onClick={() => onNearby(c)}>
          {nearby ? `People's stories near here · ${nearby}` : "Look for people's stories near here"}
        </button>
        <Link className="btn" href={`/case/${c.slug}`}>
          Full page
        </Link>
        {c.wiki && (
          <a
            className="btn"
            href={`https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(c.wiki)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more on Wikipedia ↗
          </a>
        )}
      </div>
      <p className="note">
        Famous cases are real, widely reported events. Each file sets out what witnesses said and the explanations that
        have been offered, without taking a side.
      </p>
    </>
  );
}

function StoryBody({
  s,
  echoState,
  setEchoState,
}: {
  s: StoryItem;
  echoState: EchoState;
  setEchoState: Props["setEchoState"];
}) {
  const [pending, start] = useTransition();
  const e = echoState[s.slug] ?? { echoes: s.echoes, mine: false };
  const onEcho = () =>
    start(async () => {
      const r = await toggleEcho(s.slug);
      if (r) setEchoState((prev) => ({ ...prev, [s.slug]: r }));
    });

  return (
    <>
      <div>
        <h2 className="s-title" id="sheetTitle">
          {s.place}
        </h2>
        <div className="s-sub">
          <span>
            {s.region}
            {s.year ? ` · ${s.year}` : ""}
          </span>
        </div>
      </div>
      <p className="quote">{s.hook}</p>
      <div className="prose">
        {s.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <dl className="fields">
        <div>
          <dt>Year</dt>
          <dd>{s.year ?? "Not given"}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{s.timeLabel ?? "Not given"}</dd>
        </div>
        <div>
          <dt>Witnesses</dt>
          <dd>{s.witnesses ?? "Not given"}</dd>
        </div>
        <div>
          <dt>Location shown</dt>
          <dd>Area only, about 5 km</dd>
        </div>
      </dl>
      {s.narrated ? (
        <div className="narr">
          <span className="play" aria-hidden="true">
            ▶
          </span>
          <p>
            <strong>Narration · {s.narrationLength}</strong>
            Narrated stories are part of the season pass.
          </p>
        </div>
      ) : null}
      <div className="same">
        <p>
          <b>{e.echoes} echoes</b> · people who reported something similar within 50 km.
        </p>
        <button className="btn" aria-pressed={e.mine} onClick={onEcho} disabled={pending}>
          {e.mine ? "Echoed" : "Echo this, I’ve seen something similar"}
        </button>
      </div>
      <div className="links">
        <Link className="btn" href={`/story/${s.slug}`}>
          Full page
        </Link>
      </div>
      {s.isSample && (
        <p className="note">This is a sample story written to show the format. It is not a real report.</p>
      )}
    </>
  );
}

function ListBody({ items, onPick }: { items: MapItem[]; onPick: (i: MapItem) => void }) {
  return (
    <div className="list" id="sheetTitle">
      {items.map((i) => (
        <button
          key={i.slug}
          className="item"
          style={{ "--c": catColor(i.category) } as React.CSSProperties}
          onClick={() => onPick(i)}
        >
          <i />
          <b>{itemName(i)}</b>
          <em>{i.kind === "case" ? i.dateLabel : (i.year ?? "")}</em>
          <small>{i.kind === "case" ? i.region : i.hook}</small>
        </button>
      ))}
    </div>
  );
}

function ShareBody({ center, onClose }: { center: { lat: number; lon: number }; onClose: () => void }) {
  const [state, action, pending] = useActionState<SubmitState, FormData>(submitStory, null);
  const coords = `${Math.abs(center.lat).toFixed(2)}°${center.lat >= 0 ? "N" : "S"} ${Math.abs(center.lon).toFixed(2)}°${center.lon >= 0 ? "E" : "W"}`;

  if (state?.ok) {
    return (
      <div className="done">
        <h2 className="s-title" id="sheetTitle">
          Your story is in the review queue
        </h2>
        <p className="prose" style={{ margin: 0 }}>
          Once it&apos;s approved, it appears on the map near {state.place}, and people nearby can echo it.
        </p>
        <button className="btn" onClick={onClose}>
          Back to the map
        </button>
      </div>
    );
  }

  return (
    <>
      <div>
        <h2 className="s-title" id="sheetTitle">
          What did you see or hear?
        </h2>
        <div className="s-sub">
          <span>Stories are reviewed before they appear on the map.</span>
        </div>
      </div>
      <form className="form" action={action} noValidate>
        <input type="hidden" name="lat" value={center.lat} />
        <input type="hidden" name="lon" value={center.lon} />
        <div className="hp" aria-hidden="true">
          <label htmlFor="fWebsite">Website</label>
          <input id="fWebsite" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="f2">
          <div className="field">
            <label htmlFor="fCat">Category</label>
            <select id="fCat" name="category" defaultValue="sky">
              {CATEGORY_KEYS.map((k) => (
                <option key={k} value={k}>
                  {CATEGORIES[k].label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="fWhere">Town or area</label>
            <input id="fWhere" name="place" placeholder="e.g. Munsiyari" required maxLength={80} />
          </div>
          <div className="field">
            <label htmlFor="fRegion">State and country</label>
            <input id="fRegion" name="region" placeholder="e.g. Uttarakhand, India" maxLength={80} />
          </div>
        </div>
        <div className="f2">
          <div className="field">
            <label htmlFor="fYear">Year</label>
            <input id="fYear" name="year" inputMode="numeric" placeholder="e.g. 2014" maxLength={4} />
          </div>
          <div className="field">
            <label htmlFor="fTime">Time of day</label>
            <input id="fTime" name="timeLabel" placeholder="e.g. around 2 am" maxLength={40} />
          </div>
          <div className="field">
            <label htmlFor="fWit">Who else saw it?</label>
            <input id="fWit" name="witnesses" placeholder="e.g. my brother and I" maxLength={80} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="fStory">Your story</label>
          <textarea
            id="fStory"
            name="story"
            placeholder="Start with the moment you noticed something was wrong."
            required
            maxLength={6000}
          />
          <small>Leave a blank line between paragraphs.</small>
        </div>
        <p className="pin">
          Pinned where the ring is now: <b>{coords}</b>. The map shows only a ~5 km area. To move the pin, close this
          and drag the map.
        </p>
        <ul className="rules">
          <li>Leave out real names and exact addresses.</li>
          <li>Nothing about crime, violence or anyone getting hurt.</li>
          <li>No links, phone numbers, remedies, rituals or charms.</li>
        </ul>
        {state && !state.ok && (
          <p className="error" role="alert">
            {state.error}
          </p>
        )}
        <div>
          <button className="btn primary" type="submit" disabled={pending}>
            {pending ? "Sending…" : "Send for review"}
          </button>
        </div>
      </form>
    </>
  );
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const r = Math.PI / 180;
  const a =
    Math.sin(((lat2 - lat1) * r) / 2) ** 2 +
    Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(((lon2 - lon1) * r) / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(a));
}
