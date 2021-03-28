import React from "react";
import SliderPicker from "./SliderPicker";
import { ff00, secsToHms, useCalc, useSettings, withLayout } from "../utils";
import { LOCKS } from "../utils/useCalc";

const Main = () => {
  const [settings] = useSettings();
  const { time, dist, speed, lock, setLock, update } = useCalc({
    time: settings.time.value,
    dist: settings.dist.value,
    speed: settings.speed.value,
  });

  const kph = speed / 1000;
  const mpk = 60 / kph;
  const ms = [mpk, (mpk % 1) * 60].map(ff00).join(":");

  return (
    <>
      <SliderPicker
        title={`Time ${secsToHms(time)}`}
        locked={lock === LOCKS.TIME}
        onChange={update.time}
        onLockClick={() => setLock(LOCKS.TIME)}
        {...settings.time}
        value={time}
      />
      <SliderPicker
        title={`Distance ${(dist / 1000).toFixed(1)}km`}
        locked={lock === LOCKS.DIST}
        onChange={update.dist}
        onLockClick={() => setLock(LOCKS.DIST)}
        {...settings.dist}
        value={dist}
      />
      <SliderPicker
        title={`Pace ${ms}/km (${kph.toFixed(1)}kph)`}
        locked={lock === LOCKS.SPEED}
        onChange={update.speed}
        onLockClick={() => setLock(LOCKS.SPEED)}
        {...settings.speed}
        value={speed}
      />
    </>
  );
};

export default withLayout(Main);
