import { SyntheticEvent, useEffect, useState } from "react";
import { Unit } from "~/types";

const HOUR = 60 * 60;
export const calcTime = (dist: number, speed: number) => (dist / speed) * HOUR; // seconds
export const calcDist = (time: number, speed: number) => (speed * time) / HOUR; // meters
export const calcPace = (time: number, dist: number) => (time / dist) * 1000; // seconds(/km)
export const calcSpeed = (time: number, dist: number) => (dist * HOUR) / time; // meters(/hour)

export default function useCalc({
  time: initialTime = 0,
  dist: initialDist = 0,
  speed: initialSpeed = 0,
  lock: initialLock = "speed",
}: {
  time?: number;
  dist?: number;
  speed?: number;
  lock?: Unit;
}) {
  const [time, setTime] = useState(initialTime);
  const [dist, setDist] = useState(initialDist);
  const [speed, setSpeed] = useState(initialSpeed);
  const [lock, setLock] = useState(initialLock);

  useEffect(() => {
    switch (initialLock) {
      case "time":
        return setTime(calcTime(initialDist, initialSpeed));
      case "dist":
        return setDist(calcDist(initialTime, initialSpeed));
      case "speed":
      default:
        return setSpeed(calcSpeed(initialTime, initialDist));
    }
  }, [initialTime, initialDist, initialSpeed, initialLock]);

  const updateTime = (evt: SyntheticEvent, newTime: number) => {
    setTime(newTime);

    if (lock === "dist") setDist(calcDist(newTime, speed));
    if (lock === "speed") setSpeed(calcSpeed(newTime, dist));
  };

  const updateDist = (evt: SyntheticEvent, newDist: number) => {
    setDist(newDist);

    if (lock === "time") setTime(calcTime(newDist, speed));
    if (lock === "speed") setSpeed(calcSpeed(time, newDist));
  };

  const updateSpeed = (evt: SyntheticEvent, newSpeed: number) => {
    setSpeed(newSpeed);

    if (lock === "time") setTime(calcTime(dist, newSpeed));
    if (lock === "dist") setDist(calcDist(time, newSpeed));
  };

  const update = {
    time: updateTime,
    dist: updateDist,
    speed: updateSpeed,
  };

  return { time, dist, speed, update, lock, setLock };
}
