import React, { useState } from "react";
import { Button, IconButton, InputBase, Slider, Typography } from "@material-ui/core";
import LockIconOutlined from "@material-ui/icons/Lock";
import LockOpenIconOutlined from "@material-ui/icons/LockOpen";
import { f00 } from "./utils";

const distances = [
  { label: "Mile", value: 1610 },
  { label: "5K", value: 5000 },
  { label: "10K", value: 10000 },
  { label: "½ Marathon", value: 21100 },
  { label: "Marathon", value: 42200 },
  { label: "50K", value: 50000 },
  { label: "100K", value: 100000 },
];

const speeds = [
  { label: "Walk", value: 6000 },
  { label: "Jog", value: 8000 },
  { label: "Run", value: 12000 },
  { label: "Fast", value: 15000 },
  { label: "Bekele", value: 24000 },
];

const Main = () => {
  const [time, setTime] = useState("01:20:30");
  const [dist, setDist] = useState(10000);
  const [speed, setSpeed] = useState(10000);
  const [timeLocked, setTimeLocked] = useState(true);

  const handleTime = evt => setTime(evt.target.value);
  const handleDist = (evt, value) => setDist(value);
  const handleSpeed = (evt, value) => setSpeed(value);
  const toggleTimeLock = () => setTimeLocked(!timeLocked);

  const kph = speed / 1000;
  const mpk = 60 / kph;
  const ms = [mpk, (mpk % 1) * 60]
    .map(Math.floor)
    .map(f00)
    .join(":");

  return (
    <>
      <section>
        <Typography component="h1" variant="h6">
          Time
        </Typography>
        <InputBase value={time} onChange={handleTime} type="time" step={1} />
        <IconButton onClick={toggleTimeLock}>
          {timeLocked ? <LockIconOutlined /> : <LockOpenIconOutlined />}
        </IconButton>
      </section>
      <section>
        <Typography component="h1" variant="h6">
          {`Distance ${(dist / 1000).toFixed(1)}km`}
        </Typography>
        <Slider value={dist} onChange={handleDist} min={100} max={50000} step={100} />
        <div>
          {distances.map((d, i) => (
            <Button key={`dist${d.value}`} onClick={() => setDist(d.value)}>
              {d.label}
            </Button>
          ))}
        </div>
      </section>
      <section>
        <Typography component="h1" variant="h6">
          {`Pace ${ms}/km (${kph.toFixed(1)}kph)`}
        </Typography>
        <Slider value={speed} onChange={handleSpeed} min={6000} max={24000} step={100} />
        <div>
          {speeds.map((d, i) => (
            <Button key={`speed${d.value}`} onClick={() => setSpeed(d.value)}>
              {d.label}
            </Button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;
