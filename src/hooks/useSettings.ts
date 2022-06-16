import { useState } from "react";

export enum DISTANCES {
  DEFAULT,
  ALL,
  SHORT,
  MEDIUM,
  LONG,
  ULTRA,
}

export type Mark = { label: string; value: number };
export type SliderConfig = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  buttons?: Mark[];
};

export type DistanceSetting = Record<"time" | "dist" | "speed", SliderConfig>;

export const times: Mark[] = [
  { label: "12'", value: 12 * 60 },
  { label: "30'", value: 30 * 60 },
  { label: "1h", value: 1 * 3600 },
  { label: "2h", value: 2 * 3600 },
  { label: "3h", value: 3 * 3600 },
  { label: "4h", value: 4 * 3600 },
  { label: "6h", value: 6 * 3600 },
  { label: "8h", value: 8 * 3600 },
  { label: "12h", value: 12 * 3600 },
  { label: "24h", value: 24 * 3600 },
];

export const distances: Mark[] = [
  { label: "1 mi", value: 1610 },
  { label: "5K", value: 5000 },
  { label: "10K", value: 10000 },
  { label: "½ Marathon", value: 21097 },
  { label: "Marathon", value: 42195 },
  { label: "50K", value: 50000 },
  { label: "50 mi", value: 80467 },
  { label: "100K", value: 100000 },
  { label: "100 Mi", value: 160934 },
];

export const speeds: Mark[] = [
  { label: "🚶", value: 6000 },
  { label: "🚶💨", value: 8000 },
  { label: "🏃", value: 12000 },
  { label: "🏃💨", value: 15000 },
  { label: "Bekele", value: 24000 },
  { label: "Bolt", value: 38000 },
];

/**
 * `time` in seconds
 * `dist` in meters
 * `speed` in meters/hour
 */
export const SETTINGS: Record<DISTANCES, DistanceSetting> = {
  [DISTANCES.DEFAULT]: {
    time: { min: 60, max: 3600, step: 20, buttons: times },
    dist: { min: 1000, max: 10000, step: 100, buttons: distances },
    speed: { min: 6000, max: 16000, step: 100, buttons: speeds },
  },
  [DISTANCES.SHORT]: {
    time: { min: 6, max: 120, step: 1, value: 10 },
    dist: { min: 60, max: 400, step: 10, value: 200, buttons: distances },
    speed: { min: 10000, max: 50000, step: 100, value: 16000, buttons: speeds },
  },
  [DISTANCES.MEDIUM]: {
    time: { min: 40, max: 3600, step: 1, value: 600 },
    dist: { min: 400, max: 5000, step: 100, value: 1500, buttons: distances },
    speed: { min: 8000, max: 40000, step: 100, value: 14000, buttons: speeds },
  },
  [DISTANCES.LONG]: {
    time: { min: 600, max: 21600, step: 2, value: 1200 },
    dist: { min: 5000, max: 42000, step: 100, value: 10000, buttons: distances },
    speed: { min: 4000, max: 32000, step: 100, value: 12000, buttons: speeds },
  },
  [DISTANCES.ULTRA]: {
    time: { min: 10, max: 100, step: 2, value: 10 },
    dist: { min: 10, max: 100, step: 2, value: 10, buttons: distances },
    speed: { min: 10, max: 100, step: 2, value: 10, buttons: speeds },
  },
  [DISTANCES.ALL]: {
    time: { min: 60, max: 86400, step: 20 },
    dist: { min: 100, max: 50000, step: 100, buttons: distances },
    speed: { min: 6000, max: 24000, step: 100, buttons: speeds },
  },
};

const DEFAULT_DISTANCE = DISTANCES.DEFAULT;

export default function useSettings(initialState = DISTANCES.DEFAULT) {
  const [distSettings, setDistSettings] = useState<DistanceSetting>(SETTINGS[initialState]);

  const setDistance = (newDist: DISTANCES) => {
    setDistSettings(SETTINGS[newDist] ?? SETTINGS[DEFAULT_DISTANCE]);
  };

  return [distSettings, setDistance];
}
