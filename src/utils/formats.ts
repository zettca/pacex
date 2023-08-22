export const f00 = (num: number) => (num < 10 ? `0${num}` : String(num));
export const ff00 = (num: number) => f00(Math.floor(num));

export const formatTime = (secs: number) => {
  const hh = secs / 3600;
  const mm = (secs % 3600) / 60;
  const ss = secs % 60;
  return [hh, mm, ss].map(ff00).join(":");
};

export const formatDist = (dist: number) => (dist / 1000).toFixed(1);

export const formatSpeed = (speed: number) => {
  const kph = speed / 1000;
  const mpk = 60 / kph;

  const kmHr = kph.toFixed(1);
  const minKm = [mpk, (mpk % 1) * 60].map(ff00).join(":");

  return { kmHr, minKm };
};
