import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CardContent } from "@mui/material";

import { format } from "~/utils/formats";
import useCalc from "~/hooks/useCalc";
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
    <CardContent
      sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}
    >
      <SliderPicker
        title={`${t("time")} ${timeF}`}
        selected={lock === "time"}
        onChange={update.time}
        onLockClick={() => setLock("time")}
        {...settings.time}
        value={time}
      />
      <SliderPicker
        title={`${t("distance")} ${distF}km`}
        selected={lock === "dist"}
        onChange={update.dist}
        onLockClick={() => setLock("dist")}
        {...settings.dist}
        value={dist}
      />
      <SliderPicker
        title={`${t("pace")} ${minKm}/km (${kmHr}km/h)`}
        selected={lock === "speed"}
        onChange={update.speed}
        onLockClick={() => setLock("speed")}
        {...settings.speed}
        value={speed}
      />
    </CardContent>
  );
};
