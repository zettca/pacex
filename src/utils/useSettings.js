import { useState } from "react";

export const DISTANCES = {
  ALL: "ALL",
  SHORT: "SHORT",
  MEDIUM: "MEDIUM",
  LONG: "LONG",
  ULTRA: "ULTRA",
};

export const distances = [
  { label: "Mile", value: 1610 },
  { label: "5K", value: 5000 },
  { label: "10K", value: 10000 },
  { label: "½ Marathon", value: 21097 },
  { label: "Marathon", value: 42195 },
  { label: "50K", value: 50000 },
  { label: "100K", value: 100000 },
];

export const speeds = [
  { label: "Walk", value: 6000 },
  { label: "Jog", value: 8000 },
  { label: "Run", value: 12000 },
  { label: "Fast", value: 15000 },
  { label: "Bekele", value: 24000 },
];

/**
 * `time` in seconds
 * `dist` in meters
 * `speed` in meters/hour
 */

export const SETTINGS = {
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

const DEFAULT_DISTANCE = DISTANCES.ALL;

export default function useSettings(initialState = DEFAULT_DISTANCE) {
  const [distSettings, setDistSettings] = useState(SETTINGS[DISTANCES[initialState]]);

  const setDistance = (newDist) => {
    setDistSettings(SETTINGS[DISTANCES[newDist]] ?? SETTINGS[DEFAULT_DISTANCE]);
  };

  return [distSettings, setDistance];
}
