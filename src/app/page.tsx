import ColdspotApp from "@/components/coldspot/ColdspotApp";
import { getAllCases, getApprovedStories } from "@/db/queries";

// Rebuilt at most every 5 minutes, and immediately when you approve a story.
export const revalidate = 300;

export default function Home() {
  const cases = getAllCases();
  const stories = getApprovedStories();
  return <ColdspotApp cases={cases} stories={stories} />;
}
