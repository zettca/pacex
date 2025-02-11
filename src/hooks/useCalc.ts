import { useMemo } from "react";
import type { CalcParams } from "~/types";

const HOUR = 60 * 60;
export const calcTime = (dist: number, speed: number) => (dist / speed) * HOUR; // seconds
export const calcDist = (time: number, speed: number) => (speed * time) / HOUR; // meters
export const calcPace = (time: number, dist: number) => (time / dist) * 1000; // seconds(/km)
export const calcSpeed = (time: number, dist: number) => (dist * HOUR) / time; // meters(/hour)

export function calcValues({ time, dist, speed, lock = "speed" }: CalcParams) {
  switch (lock) {
    case "time":
      return { lock, time: Math.round(calcTime(dist, speed)), dist, speed };
    case "dist":
      return { lock, time, dist: Math.round(calcDist(time, speed)), speed };
    case "speed":
      return { lock, time, dist, speed: Math.round(calcSpeed(time, dist)) };
  }
}

export function useCalc(params: CalcParams) {
  return useMemo(() => calcValues(params), [params]);
}
