import { useMemo } from "react";
import type { CalcParams } from "~/types";

const HOUR = 60 * 60;
export const calcTime = (dist: number, speed: number) => (dist / speed) * HOUR; // seconds
export const calcDist = (time: number, speed: number) => (speed * time) / HOUR; // meters
export const calcPace = (time: number, dist: number) => (time / dist) * 1000; // seconds(/km)
export const calcSpeed = (time: number, dist: number) => (dist * HOUR) / time; // meters(/hour)

export default function useCalc({
  time,
  dist,
  speed,
  lock = "speed",
}: CalcParams) {
  return useMemo(() => {
    switch (lock) {
      case "time":
        return { time: calcTime(dist, speed), dist, speed };
      case "dist":
        return { time, dist: calcDist(time, speed), speed };
      case "speed":
      default:
        return { time, dist, speed: calcSpeed(time, dist) };
    }
  }, [dist, lock, speed, time]);
}
