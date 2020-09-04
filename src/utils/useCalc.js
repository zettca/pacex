import { useState } from "react";
import { calcSpeed, calcTime, calcDist } from "./index";

export default function useCalc(initialState) {
  const { time: initialTime, dist: initialDist, speed: initialSpeed } = initialState;

  const [time, setTime] = useState(initialTime);
  const [dist, setDist] = useState(initialDist);
  const [speed, setSpeed] = useState(initialSpeed);
  const [timeLocked, setTimeLocked] = useState(true);

  const updateTime = (newTime) => {
    setTime(newTime);
    setSpeed(calcSpeed(newTime, dist));
  };

  const updateDist = (newDist) => {
    setDist(newDist);
    if (timeLocked) setSpeed(calcSpeed(time, newDist));
    else setTime(calcTime(newDist, speed));
  };

  const updateSpeed = (newSpeed) => {
    setSpeed(newSpeed);
    if (timeLocked) setDist(calcDist(time, newSpeed));
    else setTime(calcTime(dist, newSpeed));
  };

  const update = (key, newValue) => {
    switch (key) {
      case "time":
        return updateTime(newValue || time); // TODO: ??
      case "dist":
        return updateDist(newValue || dist); // TODO: ??
      case "speed":
        return updateSpeed(newValue || speed); // TODO: ??
      case "timeLocked":
        return setTimeLocked(newValue || !timeLocked); // TODO: ??
      default:
        return null;
    }
  };

  return [time, dist, speed, update];
}
