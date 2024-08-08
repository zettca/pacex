import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { CardContent } from "@mui/material";
import SliderPicker from "~/components/SliderPicker";
import useCalc from "~/hooks/useCalc";
import { useSetParams } from "~/hooks/useSetParams";
import useSettings from "~/hooks/useSettings";
import { type CalcParams, type Unit } from "~/types";
import { formatDist, formatSpeed, formatTime } from "~/utils/formats";
import "~/i18n/config";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(request.url);
  const { lock, time, dist, speed } = Object.fromEntries(searchParams);

  return {
    lock: (lock as Unit) || "speed",
    time: Number(time) || 1800,
    dist: Number(dist) || 5000,
    speed: Number(speed) || 10000,
  } satisfies CalcParams;
};

export const Component = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "labels" });
  const setParams = useSetParams();
  const loaderData = useLoaderData() as ReturnType<typeof loader>;
  const settings = useSettings();
  const [state, setState] = useState(loaderData);
  const calc = useCalc(state);

  useEffect(() => {
    setState(loaderData);
  }, [loaderData]);

  const sliders = useMemo<Record<Unit, string>>(() => {
    const { minKm, kmHr } = formatSpeed(calc.speed);

    return {
      time: t("time", { value: formatTime(calc.time) }),
      dist: t("distance", { value: formatDist(calc.dist) }),
      speed: t("pace", { minKm, kmHr }),
    };
  }, [t, calc]);

  return (
    <CardContent
      sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}
    >
      {Object.entries(sliders).map(([unit, title]) => (
        <SliderPicker
          key={unit}
          title={title}
          selected={loaderData.lock === unit}
          onChange={(newValue) => {
            setState((curr) => ({ ...curr, [unit]: newValue }));
          }}
          onChangeCommitted={(newValue) => {
            setParams({ [unit]: String(newValue) });
          }}
          onLockClick={() => {
            setParams({ lock: unit, [unit]: null }, { replace: false });
          }}
          {...settings[unit]}
          value={calc[unit]}
        />
      ))}
    </CardContent>
  );
};
