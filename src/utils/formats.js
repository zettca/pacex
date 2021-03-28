export const f00 = (n) => (n < 10 ? `0${n}` : String(n));
export const ff00 = (n) => f00(Math.floor(n));

export const secsToHms = (secs) => {
  const hh = secs / 3600;
  const mm = (secs % 3600) / 60;
  const ss = secs % 60;
  return [hh, mm, ss].map(ff00).join(":");
};
