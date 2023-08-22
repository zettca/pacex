export const range = (len: number) => Array.from(Array(len), (v, i) => i);

export const random = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min)) + min;
