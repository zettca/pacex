import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import SliderPicker from "../SliderPicker";
import { LOCKS, format, useCalc, useSettings, withLayout } from "../../utils";

const Main = () => {
  const { t } = useTranslation();
  const [settings] = useSettings();
  const { time, dist, speed, lock, setLock, update } = useCalc({
    time: 1800,
    dist: 5000,
  });

  const timeF = useMemo(() => format.time(time), [time]);
  const distF = useMemo(() => format.dist(dist), [dist]);
  const { minKm, kmHr } = useMemo(() => format.speed(speed), [speed]);

  return (
    <>
      <SliderPicker
        id="time"
        title={`${t("components.main.time")} ${timeF}`}
        locked={lock === LOCKS.TIME}
        onChange={update.time}
        onLockClick={() => setLock(LOCKS.TIME)}
        {...settings.time}
        value={time}
      />
      <SliderPicker
        id="dist"
        title={`${t("components.main.distance")} ${distF}km`}
        locked={lock === LOCKS.DIST}
        onChange={update.dist}
        onLockClick={() => setLock(LOCKS.DIST)}
        {...settings.dist}
        value={dist}
      />
      <SliderPicker
        id="pace"
        title={`${t("components.main.speed")} ${minKm}/km (${kmHr}km/h)`}
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
