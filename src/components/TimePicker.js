import React from "react";
import { ff00 } from "../utils";

// eslint-disable-next-line react/prop-types
const TimePicker = ({ onChange, time, step }) => {
  const parsedTime = [time / 3600, Math.floor(time / 60) % 60, time % 60].map(ff00).join(":");
  return <input type="time" value={parsedTime} onChange={onChange} step={step} />;
};

export default TimePicker;
