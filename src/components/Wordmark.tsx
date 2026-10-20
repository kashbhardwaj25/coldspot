import { Logo } from "./Logo";

/** The Uncanny Map lockup: the eye, with the name and a quiet second line beside it. */
export function Wordmark({ tagline }: { tagline: string }) {
  return (
    <span className="wordmark">
      <Logo />
      <span className="wordmark-text">
        <b>UNCANNY MAP</b>
        <small>{tagline}</small>
      </span>
    </span>
  );
}
