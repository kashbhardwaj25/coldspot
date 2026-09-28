import { geoDistance, geoInterpolate } from "d3-geo";

/** One animation step. Returns false once the animation has finished. */
export type Tick = (now: number) => boolean;

type LonLat = [number, number];

export const easeOut = (t: number) => 1 - (1 - t) ** 3;
export const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

/** Flies along the great circle, dipping the zoom mid-flight on long trips. */
export function flight(
  from: LonLat,
  to: LonLat,
  zoom: [number, number],
  duration: number,
  apply: (lon: number, lat: number, zoom: number) => void,
): Tick {
  const interp = geoInterpolate(from, to);
  const dip = Math.min(0.75, geoDistance(from, to) * 0.55);
  const [z0, z1] = zoom;
  const t0 = performance.now();
  return (now) => {
    const k = Math.min(1, (now - t0) / duration);
    const e = easeInOut(k);
    const [lon, lat] = interp(e);
    apply(lon, lat, (z0 + (z1 - z0) * e) * (1 - dip * Math.sin(Math.PI * e)));
    return k < 1;
  };
}

/** Eases the zoom from one level to another. */
export function zoomTo(z0: number, z1: number, apply: (zoom: number) => void): Tick {
  const t0 = performance.now();
  return (now) => {
    const k = Math.min(1, (now - t0) / 320);
    apply(z0 + (z1 - z0) * easeOut(k));
    return k < 1;
  };
}

/** Short glide that pulls a nearby dot into the ring. */
export function glide(from: LonLat, to: LonLat, t0: number, apply: (lon: number, lat: number) => void): Tick {
  const interp = geoInterpolate(from, to);
  return (now) => {
    const k = Math.min(1, (now - t0) / 360);
    const [lon, lat] = interp(easeOut(k));
    apply(lon, lat);
    return k < 1;
  };
}

type Nearest = { item: { lon: number; lat: number }; d: number } | undefined;
type Turnable = {
  target: [number, number];
  turn(dLon: number, dLat: number): void;
  look(lon: number, lat: number): void;
};

/** Owns what moves the globe between frames: a scripted animation, momentum after a flick, or the snap to a dot. */
export class Motion {
  held = false;
  private anim: Tick | null = null;
  private snap: Tick | null = null;
  private vel: [number, number] = [0, 0];
  private settleAt = 0;

  constructor(private snapRadius: number) {}

  play(tick: Tick) {
    this.stop();
    this.anim = tick;
  }

  stop() {
    this.anim = null;
    this.snap = null;
    this.vel = [0, 0];
  }

  /** Remember the drag speed, in degrees per frame, for momentum on release. */
  fling(dLon: number, dLat: number, dt: number) {
    this.vel = [(dLon / dt) * 16, (dLat / dt) * 16];
  }

  /** The view came to rest (or will, after `delay` ms): snapping may start from here. */
  settle(flick = true, delay = 0) {
    if (!flick) this.vel = [0, 0];
    this.settleAt = performance.now() + delay;
  }

  step(now: number, cam: Turnable, n: Nearest) {
    if (this.anim) {
      if (!this.anim(now)) {
        this.anim = null;
        this.settleAt = now;
      }
      return;
    }
    if (this.held) return;
    if (Math.abs(this.vel[0]) + Math.abs(this.vel[1]) > 0.002) {
      cam.turn(this.vel[0], this.vel[1]);
      this.vel = [this.vel[0] * 0.92, this.vel[1] * 0.92];
      this.settleAt = now;
      return;
    }
    this.vel = [0, 0];
    // Resting close to a dot: glide it into the ring.
    if (!this.snap && now - this.settleAt < 60 && n && n.d > 1.5 && n.d < this.snapRadius) {
      this.snap = glide(cam.target, [n.item.lon, n.item.lat], now, (x, y) => cam.look(x, y));
    }
    if (this.snap && !this.snap(now)) this.snap = null;
  }
}
