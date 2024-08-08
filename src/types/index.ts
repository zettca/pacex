import type { SliderProps } from "@mui/material";

export type Unit = "time" | "dist" | "speed";

export type CalcParams = {
  /** time in seconds */
  time: number;
  /** distance in meters */
  dist: number;
  /** speed in meters/hour @example 12000 // 12.0km/h */
  speed: number;
  /** Unit to calculate */
  lock: Unit;
};

export type Mark = {
  label: string;
  value: number;
};

export type SliderConfig = Pick<SliderProps, "min" | "max" | "step"> & {
  value?: number;
  buttons?: Mark[];
};
