import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { CardContent } from "@mui/material";
import { useCalc } from "~/hooks/useCalc";
import useSettings from "~/hooks/useSettings";
import type { CalcParams, Unit } from "~/types";
import { formatDist, formatSpeed, formatTime } from "~/utils/formats";
import SliderPicker from "./SliderPicker";

const useSliders = ({ time, dist, speed }: Omit<CalcParams, "lock">) => {
  const { t } = useTranslation(undefined, { keyPrefix: "labels" });

  return useMemo<Record<Unit, string>>(() => {
    const { minKm, kmHr } = formatSpeed(speed);

    return {
      time: t("time", { value: formatTime(time) }),
      dist: t("distance", { value: formatDist(dist) }),
      speed: t("pace", { minKm, kmHr }),
    };
  }, [t, speed, time, dist]);
};

export interface MainProps {
  data: CalcParams;
  onCommit: (state: CalcParams) => void;
}

export const Main = ({ data, onCommit }: MainProps) => {
  const settings = useSettings();
  const [state, setState] = useState(data);
  const values = useCalc(state);
  const sliders = useSliders(values);

  useEffect(() => {
    setState((c) => ({
      lock: data.lock,
      time: data.time || c.time,
      dist: data.dist || c.dist,
      speed: data.speed || c.speed,
    }));
  }, [data]);

  return (
    <CardContent
      sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}
    >
      {Object.entries(sliders).map(([unit, title]) => (
        <SliderPicker
          key={unit}
          title={title}
          selected={data.lock === unit}
          onChange={(newValue) => setState((c) => ({ ...c, [unit]: newValue }))}
          onChangeCommitted={() => onCommit(values)}
          onLockClick={() => onCommit({ ...values, lock: unit })}
          {...settings[unit]}
          value={values[unit]}
        />
      ))}
    </CardContent>
  );
};
