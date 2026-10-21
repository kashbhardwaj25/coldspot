const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "13 March 1997", or a range of days in one month: "26–28 December 1980". */
const DATE = new RegExp(`(?:^|\\D)(\\d{1,2})(?:[–-](\\d{1,2}))? (${MONTHS.join("|")}),? (\\d{3,4})`);

type ExactDate = { from: number; to: number; month: number; year: number };

/** The exact date in a case's date label, or null when it gives no day ("July 1947", "Every autumn"). */
export function exactDate(label: string): ExactDate | null {
  const m = DATE.exec(label);
  if (!m?.[1] || !m[3] || !m[4]) return null;
  const from = Number(m[1]);
  return { from, to: m[2] ? Number(m[2]) : from, month: MONTHS.indexOf(m[3]), year: Number(m[4]) };
}

/** The year it happened, when a case's date falls on this day of the year in an earlier year; otherwise null. */
export function yearOnThisDay(label: string, today: Date): number | null {
  const d = exactDate(label);
  if (!d || d.month !== today.getMonth() || d.year >= today.getFullYear()) return null;
  const day = today.getDate();
  return day >= d.from && day <= d.to ? d.year : null;
}

/** Cases that happened on this day in an earlier year, featured ones first. */
export function casesOnThisDay<T extends { dateLabel: string; featured: boolean }>(cases: T[], today: Date): T[] {
  return cases
    .filter((c) => yearOnThisDay(c.dateLabel, today) !== null)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}
