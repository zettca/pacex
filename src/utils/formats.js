export const f00 = (n) => (n < 10 ? `0${n}` : String(n));
export const ff00 = (n) => f00(Math.floor(n));

export const secsToHms = (secs) => new Date(secs * 1000).toISOString().substr(11, 8);
