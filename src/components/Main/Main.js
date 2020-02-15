import React, { useState } from "react";
import { Button, IconButton, Slider, Typography } from "@material-ui/core";
import LockIconOutlined from "@material-ui/icons/Lock";
import LockOpenIconOutlined from "@material-ui/icons/LockOpen";
import { ff00, parseTime, calcSpeed, calcTime, calcDist } from "./utils";

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
  const [time, setTime] = useState(90 * 60 + 20);
  const [dist, setDist] = useState(10000);
  const [speed, setSpeed] = useState(10000);
  const [timeLocked, setTimeLocked] = useState(true);

  const stepDist = 100;
  const stepSpeed = 100;

  const handleTime = (evt, value) => {
    setTime(value || parseTime(evt.target.value));
    setSpeed(calcSpeed(time, dist));
  };

  const handleDist = (evt, value) => {
    setDist(value || dist + stepDist * -Math.sign(evt.deltaY));
    timeLocked ? setSpeed(calcSpeed(time, dist)) : setTime(calcTime(dist, speed));
  };

  const handleSpeed = (evt, value) => {
    setSpeed(value || speed + stepSpeed * -Math.sign(evt.deltaY));
    timeLocked ? setDist(calcDist(time, speed)) : setTime(calcTime(dist, speed));
  };

  const toggleTimeLock = () => setTimeLocked(!timeLocked);

  const kph = speed / 1000;
  const mpk = 60 / kph;
  const ms = [mpk, (mpk % 1) * 60].map(ff00).join(":");
  const parsedTime = [time / 3600, Math.floor(time / 60) % 60, time % 60].map(ff00).join(":");

  return (
    <>
      <section>
        <Typography component="h1" variant="h6">
          Time
        </Typography>
        <input type="time" value={parsedTime} onChange={handleTime} step={1} />
        <IconButton onClick={toggleTimeLock}>
          {timeLocked ? <LockIconOutlined /> : <LockOpenIconOutlined />}
        </IconButton>
      </section>
      <section>
        <Typography component="h1" variant="h6">
          {`Distance ${(dist / 1000).toFixed(1)}km`}
        </Typography>
        <Slider
          value={dist}
          onChange={handleDist}
          onWheel={handleDist}
          min={100}
          max={50000}
          step={stepDist}
        />
        <div>
          {distances.map((d, i) => (
            <Button color="primary" key={`d${d.value}`} onClick={() => handleDist("", d.value)}>
              {d.label}
            </Button>
          ))}
        </div>
      </section>
      <section>
        <Typography component="h1" variant="h6">
          {`Pace ${ms}/km (${kph.toFixed(1)}kph)`}
        </Typography>
        <Slider
          color="secondary"
          value={speed}
          onChange={handleSpeed}
          onWheel={handleSpeed}
          min={6000}
          max={24000}
          step={stepSpeed}
        />
        <div>
          {speeds.map((d, i) => (
            <Button color="secondary" key={`s${d.value}`} onClick={() => handleSpeed("", d.value)}>
              {d.label}
            </Button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;
