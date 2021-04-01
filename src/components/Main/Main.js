import React from "react";
import { useTranslation } from "react-i18next";
import SliderPicker from "../SliderPicker";
import { ff00, LOCKS, secsToHms, useCalc, useSettings, withLayout } from "../../utils";

const Main = () => {
  const { t } = useTranslation();
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
        id="time"
        title={`${t("components.main.time")} ${secsToHms(time)}`}
        locked={lock === LOCKS.TIME}
        onChange={update.time}
        onLockClick={() => setLock(LOCKS.TIME)}
        {...settings.time}
        value={time}
      />
      <SliderPicker
        id="dist"
        title={`${t("components.main.distance")} ${(dist / 1000).toFixed(1)}km`}
        locked={lock === LOCKS.DIST}
        onChange={update.dist}
        onLockClick={() => setLock(LOCKS.DIST)}
        {...settings.dist}
        value={dist}
      />
      <SliderPicker
        id="pace"
        title={`${t("components.main.speed")} ${ms}/km (${kph.toFixed(1)}kph)`}
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
