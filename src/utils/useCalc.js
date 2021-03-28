import { useState } from "react";
import { calcSpeed, calcTime, calcDist } from "./calc";

export const LOCKS = {
  TIME: "TIME",
  DIST: "DIST",
  SPEED: "SPEED",
};

export default function useCalc(initialState) {
  const {
    time: initialTime,
    dist: initialDist,
    speed: initialSpeed,
    lock: initialLock = LOCKS.SPEED,
  } = initialState;

  const [time, setTime] = useState(initialTime);
  const [dist, setDist] = useState(initialDist);
  const [speed, setSpeed] = useState(initialSpeed);
  const [lock, setLock] = useState(initialLock);

  const updateTime = (evt, newTime) => {
    setTime(newTime);

    if (lock === LOCKS.DIST) setDist(calcDist(newTime, speed));
    if (lock === LOCKS.SPEED) setSpeed(calcSpeed(newTime, dist));
  };

  const updateDist = (evt, newDist) => {
    setDist(newDist);

    if (lock === LOCKS.TIME) setTime(calcTime(newDist, speed));
    if (lock === LOCKS.SPEED) setSpeed(calcSpeed(time, newDist));
  };

  const updateSpeed = (evt, newSpeed) => {
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
