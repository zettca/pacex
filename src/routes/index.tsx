import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CardContent } from "@mui/material";
import SliderPicker from "~/components/SliderPicker";
import useCalc from "~/hooks/useCalc";
import useSettings from "~/hooks/useSettings";
import { type Unit } from "~/types";
import { formatDist, formatSpeed, formatTime } from "~/utils/formats";
import "~/i18n/config";

export const loader = () => null;

export const Component = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "components.main" });
  const [settings] = useSettings();
  const calc = useCalc({ time: 1800, dist: 5000 });
  const { time, dist, speed, lock, setLock, update } = calc;

  const sliders = useMemo<Record<Unit, string>>(() => {
    const { minKm, kmHr } = formatSpeed(speed);

    return {
      time: t("time", { value: formatTime(time) }),
      dist: t("distance", { value: formatDist(dist) }),
      speed: t("pace", { minKm, kmHr }),
    };
  }, [dist, speed, t, time]);

  return (
    <CardContent
      sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}
    >
      {Object.entries(sliders).map(([unit, title]) => (
        <SliderPicker
          key={unit}
          title={title}
          selected={lock === unit}
          onChange={update[unit]}
          onLockClick={() => setLock(unit)}
          {...settings[unit]}
          value={calc[unit]}
        />
      ))}
    </CardContent>
  );
};
