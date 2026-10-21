/**
 * Questions shown above the story box, for people who don't know where to begin. They suggest a kind of moment,
 * never a person or a place, and stay inside the content rules: nothing about crime, violence or anyone getting hurt.
 */
export const STORY_PROMPTS = [
  "Have you ever heard your name called when no one was there?",
  "Did a light in the sky ever move in a way you couldn't explain?",
  "Is there a road, a room or a stretch of forest people near you avoid after dark?",
  "Did an animal ever act as if it could see something you couldn't?",
  "Have you seen someone who wasn't there when you looked again?",
  "Did a phone, radio or clock ever do something it shouldn't have?",
  "Have you looked at the clock and found an hour gone that you can't account for?",
  "Did you hear music, footsteps or voices coming from an empty house or field?",
  "Has the same strange thing happened in one place more than once?",
  "Did you see something in the water or the hills that you still can't name?",
  "Have you and someone else seen the same thing, and still disagree about what it was?",
  "Is there a place your grandparents warned you about, and did anything happen to you there?",
] as const;

/** The prompt after `current`, chosen at random but never the same one twice in a row. */
export function nextPrompt(current: number, random = Math.random) {
  const step = 1 + Math.floor(random() * (STORY_PROMPTS.length - 1));
  return (current + step) % STORY_PROMPTS.length;
}
