import { useMemo } from "react";
import type { CalcParams } from "~/types";

const HOUR = 60 * 60;
export const calcTime = (dist: number, speed: number) => (dist / speed) * HOUR; // seconds
export const calcDist = (time: number, speed: number) => (speed * time) / HOUR; // meters
export const calcPace = (time: number, dist: number) => (time / dist) * 1000; // seconds(/km)
export const calcSpeed = (time: number, dist: number) => (dist * HOUR) / time; // meters(/hour)

export function useCalc({ time, dist, speed, lock = "speed" }: CalcParams) {
  return useMemo(() => {
    switch (lock) {
      case "time":
        return { lock, time: calcTime(dist, speed), dist, speed };
      case "dist":
        return { lock, time, dist: calcDist(time, speed), speed };
      case "speed":
      default:
        return { lock, time, dist, speed: calcSpeed(time, dist) };
    }
  }, [dist, lock, speed, time]);
}
