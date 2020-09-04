import React from "react";
import { Button, Slider } from "@material-ui/core";

const speeds = [
  { label: "Walk", value: 6000 },
  { label: "Jog", value: 8000 },
  { label: "Run", value: 12000 },
  { label: "Fast", value: 15000 },
  { label: "Bekele", value: 24000 },
];

// eslint-disable-next-line react/prop-types
const SpeedPicker = ({ value, color, onChange }) => (
  <>
    <Slider
      min={6000}
      max={24000}
      value={value}
      color={color}
      onChange={onChange}
      onWheel={onChange}
    />
    <div>
      {speeds.map((d) => (
        <Button color={color} key={`s${d.value}`} onClick={(e) => onChange(e, d.value)}>
          {d.label}
        </Button>
      ))}
    </div>
  </>
);

export default SpeedPicker;
