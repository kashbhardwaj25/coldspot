/**
 * Counts failed sign-in attempts per key (an IP hash, or one shared key when the IP can't be trusted) and
 * locks the key out for a while after too many. In memory: the site runs as a single process, and a restart
 * clearing the counts is harmless. Pure, with the clock passed in, so it's easy to test.
 */
export class AttemptLimiter {
  private failures = new Map<string, { count: number; resetAt: number }>();

  constructor(
    private readonly max: number,
    private readonly windowMs: number,
  ) {}

  /** Milliseconds until `key` may try again, or 0 if it may try now. */
  blockedFor(key: string, now: number): number {
    const f = this.failures.get(key);
    if (!f || now >= f.resetAt) return 0;
    return f.count >= this.max ? f.resetAt - now : 0;
  }

  fail(key: string, now: number) {
    const f = this.failures.get(key);
    if (!f || now >= f.resetAt) this.failures.set(key, { count: 1, resetAt: now + this.windowMs });
    else f.count += 1;
  }

  succeed(key: string) {
    this.failures.delete(key);
  }
}
