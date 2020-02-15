export const SEC = 1;
export const MIN = 60 * SEC;
export const HOUR = 60 * MIN;

export const f00 = n => (n < 10 ? `0${n}` : String(n));
export const ff00 = n => f00(Math.floor(n));
export const calcTime = (dist, speed) => (dist / speed) * HOUR; // seconds
export const calcDist = (time, speed) => (speed * time) / HOUR; // meters
export const calcPace = (time, dist) => (time / dist) * 1000; // seconds(/km)
export const calcSpeed = (time, dist) => (dist * HOUR) / time; // meters(/hour)

const TS = [HOUR, MIN, SEC];
export const parseTime = (time = "") =>
  time.split(":").reduce((acc, el, i) => acc + (Number(el) * TS[i] || 0), 0);
