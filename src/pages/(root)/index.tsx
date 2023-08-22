import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { format } from "~/utils/formats";
import useCalc, { LOCKS } from "~/hooks/useCalc";
import useSettings from "~/hooks/useSettings";
import SliderPicker from "~/components/SliderPicker";

import "~/i18n/config";

export const loader = () => null;

export const Component = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "components.main" });
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
        aria-label={t("time")}
        title={`${t("time")} ${timeF}`}
        locked={lock === LOCKS.TIME}
        onChange={update.time}
        onLockClick={() => setLock(LOCKS.TIME)}
        {...settings.time}
        value={time}
      />
      <SliderPicker
        aria-label={t("distance")}
        title={`${t("distance")} ${distF}km`}
        locked={lock === LOCKS.DIST}
        onChange={update.dist}
        onLockClick={() => setLock(LOCKS.DIST)}
        {...settings.dist}
        value={dist}
      />
      <SliderPicker
        aria-label={t("pace")}
        title={`${t("pace")} ${minKm}/km (${kmHr}km/h)`}
        locked={lock === LOCKS.SPEED}
        onChange={update.speed}
        onLockClick={() => setLock(LOCKS.SPEED)}
        {...settings.speed}
        value={speed}
      />
    </>
  );
};
