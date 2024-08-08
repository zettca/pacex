import { useMemo } from "react";
import type { Mark, SliderConfig, Unit } from "~/types";

type DistanceSetting = Record<Unit, SliderConfig>;

export type Distance = keyof typeof SETTINGS;

const times: Mark[] = [
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

const distances: Mark[] = [
  { label: "mile", value: 1610 },
  { label: "5K", value: 5000 },
  { label: "10K", value: 10000 },
  { label: "21K", value: 21097 },
  { label: "42K", value: 42195 },
  { label: "50K", value: 50000 },
  { label: "50Mi", value: 80467 },
  { label: "100K", value: 100000 },
  { label: "100mi", value: 160934 },
];

const speeds: Mark[] = [
  { label: "walk", value: 6000 },
  { label: "jog", value: 8000 },
  { label: "run", value: 12000 },
  { label: "runFast", value: 15000 },
  { label: "bekele", value: 24000 },
  { label: "bolt", value: 38000 },
];

/**
 * `time` in seconds
 * `dist` in meters
 * `speed` in meters/hour
 */
// prettier-ignore
const SETTINGS = {
  DEFAULT: {
    time: { min: 60, max: 3600, step: 20, buttons: times },
    dist: { min: 1000, max: 10000, step: 100, buttons: distances },
    speed: { min: 6000, max: 16000, step: 100, buttons: speeds },
  },
  SHORT: {
    time: { min: 6, max: 120, step: 1, value: 10 },
    dist: { min: 60, max: 400, step: 10, value: 200, buttons: distances },
    speed: { min: 10000, max: 50000, step: 100, value: 16000, buttons: speeds },
  },
  MEDIUM: {
    time: { min: 40, max: 3600, step: 1, value: 600 },
    dist: { min: 400, max: 5000, step: 100, value: 1500, buttons: distances },
    speed: { min: 8000, max: 40000, step: 100, value: 14000, buttons: speeds },
  },
  LONG: {
    time: { min: 600, max: 21600, step: 2, value: 1200 },
    dist: { min: 5000, max: 42000, step: 100, value: 10000, buttons: distances },
    speed: { min: 4000, max: 32000, step: 100, value: 12000, buttons: speeds },
  },
  ULTRA: {
    time: { min: 10, max: 100, step: 2, value: 10 },
    dist: { min: 10, max: 100, step: 2, value: 10, buttons: distances },
    speed: { min: 10, max: 100, step: 2, value: 10, buttons: speeds },
  },
  ALL: {
    time: { min: 60, max: 86400, step: 20 },
    dist: { min: 100, max: 50000, step: 100, buttons: distances },
    speed: { min: 6000, max: 24000, step: 100, buttons: speeds },
  },
} satisfies Record<string, DistanceSetting>;

export default function useSettings(dist: Distance = "DEFAULT") {
  return useMemo(() => SETTINGS[dist] ?? SETTINGS.DEFAULT, [dist]);
}
