/**
 * Static between stations, a low hum when something tunes in.
 * Browsers only allow audio after a click, so call `enable()` from a button.
 */
export class Radio {
  private ctx: AudioContext | null = null;
  private hiss: GainNode | null = null;
  private drone: GainNode | null = null;
  on = false;

  private init() {
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 2200;
    bp.Q.value = 0.6;
    this.hiss = ctx.createGain();
    this.hiss.gain.value = 0;
    src.connect(bp).connect(this.hiss).connect(ctx.destination);
    src.start();

    this.drone = ctx.createGain();
    this.drone.gain.value = 0;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 420;
    [55, 82.4, 110.3].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i === 2 ? "triangle" : "sine";
      o.frequency.value = f;
      const lfo = ctx.createOscillator();
      const lg = ctx.createGain();
      lfo.frequency.value = 0.07 + i * 0.05;
      lg.gain.value = 1.2;
      lfo.connect(lg).connect(o.detune);
      lfo.start();
      o.connect(lp);
      o.start();
    });
    lp.connect(this.drone).connect(ctx.destination);
    this.ctx = ctx;
  }

  async toggle() {
    if (!this.ctx) this.init();
    if (this.ctx!.state === "suspended") await this.ctx!.resume();
    this.on = !this.on;
    return this.on;
  }

  /** Called every time the view changes. */
  update(nearestDistance: number, tuned: boolean) {
    if (!this.ctx || !this.hiss || !this.drone) return;
    const t = this.ctx.currentTime;
    const hiss = !this.on ? 0 : tuned ? 0.006 : 0.018 + 0.05 * Math.min(1, nearestDistance / 160);
    this.hiss.gain.setTargetAtTime(hiss, t, 0.08);
    this.drone.gain.setTargetAtTime(this.on && tuned ? 0.05 : 0, t, tuned ? 0.6 : 0.25);
  }

  burst() {
    if (!this.ctx || !this.hiss || !this.on) return;
    const t = this.ctx.currentTime;
    this.hiss.gain.cancelScheduledValues(t);
    this.hiss.gain.setValueAtTime(0.16, t);
    this.hiss.gain.exponentialRampToValueAtTime(0.006, t + 0.45);
  }

  close() {
    this.ctx?.close();
    this.ctx = null;
  }
}
