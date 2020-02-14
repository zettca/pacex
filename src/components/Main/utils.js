export const SEC = 1;
export const MIN = 60 * SEC;
export const HOUR = 60 * MIN;

export const f00 = n => (n < 10 ? `0${n}` : String(n));
export const calcTime = (dist, speed) => (dist / speed) * HOUR; // seconds
export const calcDist = (time, speed) => (speed * time) / HOUR; // meters
export const calcPace = (time, dist) => (time / dist) * 1000; // seconds(/km)
export const calcSpeed = (time, dist) => (dist * HOUR) / time; // meters(/hour)
