import { useEffect, useState } from "react";
import { calcSpeed, calcTime, calcDist } from "./calc";

export enum LOCKS {
  TIME,
  DIST,
  SPEED,
}

export default function useCalc({
  time: initialTime = 0,
  dist: initialDist = 0,
  speed: initialSpeed = 0,
  lock: initialLock = LOCKS.SPEED,
}) {
  const [time, setTime] = useState<number>(initialTime);
  const [dist, setDist] = useState<number>(initialDist);
  const [speed, setSpeed] = useState<number>(initialSpeed);
  const [lock, setLock] = useState<LOCKS>(initialLock);

  useEffect(() => {
    switch (initialLock) {
      case LOCKS.TIME:
        return setTime(calcTime(initialDist, initialSpeed));
      case LOCKS.DIST:
        return setDist(calcDist(initialTime, initialSpeed));
      case LOCKS.SPEED:
      default:
        return setSpeed(calcSpeed(initialTime, initialDist));
    }
  }, [initialTime, initialDist, initialSpeed, initialLock]);

  const updateTime = (evt: Event, newTime: number) => {
    setTime(newTime);

    if (lock === LOCKS.DIST) setDist(calcDist(newTime, speed));
    if (lock === LOCKS.SPEED) setSpeed(calcSpeed(newTime, dist));
  };

  const updateDist = (evt: Event, newDist: number) => {
    setDist(newDist);

    if (lock === LOCKS.TIME) setTime(calcTime(newDist, speed));
    if (lock === LOCKS.SPEED) setSpeed(calcSpeed(time, newDist));
  };

  const updateSpeed = (evt: Event, newSpeed: number) => {
    setSpeed(newSpeed);

    if (lock === LOCKS.TIME) setTime(calcTime(dist, newSpeed));
    if (lock === LOCKS.DIST) setDist(calcDist(time, newSpeed));
  };

  const update = {
    time: updateTime,
    dist: updateDist,
    speed: updateSpeed,
  };

  return { time, dist, speed, update, lock, setLock };
}
