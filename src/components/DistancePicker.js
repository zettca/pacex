import React from "react";
import { Button, Slider } from "@material-ui/core";

const distances = [
  { label: "Mile", value: 1610 },
  { label: "5K", value: 5000 },
  { label: "10K", value: 10000 },
  { label: "½ Marathon", value: 21100 },
  { label: "Marathon", value: 42200 },
  { label: "50K", value: 50000 },
  { label: "100K", value: 100000 },
];

// eslint-disable-next-line react/prop-types
const TimePicker = ({ value, color, onChange, onButtonClick }) => (
  <>
    <Slider
      min={100}
      max={50000}
      value={value}
      color={color}
      onChange={onChange}
      onWheel={onChange}
    />
    <div>
      {distances.map(d => (
        <Button color={color} key={`d${d.value}`} onClick={e => onChange(e, d.value)}>
          {d.label}
        </Button>
      ))}
    </div>
  </>
);

export default TimePicker;
