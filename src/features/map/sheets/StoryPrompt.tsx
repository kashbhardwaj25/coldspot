import { useState } from "react";
import { nextPrompt, STORY_PROMPTS } from "@/features/stories/prompts";

/** A question to start from, above the story box, with a way to see another. Starts on a random one. */
export function StoryPrompt() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * STORY_PROMPTS.length));
  return (
    <div className="story-prompt">
      <p aria-live="polite">
        <span>Not sure where to begin?</span> {STORY_PROMPTS[index]}
      </p>
      <button type="button" className="link-btn quiet" onClick={() => setIndex(nextPrompt(index))}>
        Another question
      </button>
    </div>
  );
}
