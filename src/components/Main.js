import React, { useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import LockIconOutlined from "@material-ui/icons/Lock";
import LockOpenIconOutlined from "@material-ui/icons/LockOpen";
import TimePicker from "./TimePicker";
import SpeedPicker from "./SpeedPicker";
import DistancePicker from "./DistancePicker";
import { ff00, parseTime, calcSpeed, calcTime, calcDist } from "../utils";

const Main = () => {
  const [time, setTime] = useState(90 * 60 + 20);
  const [dist, setDist] = useState(10000);
  const [speed, setSpeed] = useState(10000);
  const [timeLocked, setTimeLocked] = useState(true);

  const stepDist = 100;
  const stepSpeed = 100;

  const handleTime = (evt, value) => {
    const newTime = value || parseTime(evt.target.value);
    setTime(newTime);
    setSpeed(calcSpeed(newTime, dist));
  };

  const handleDist = (evt, value) => {
    const newDist = value || dist + stepDist * -Math.sign(evt.deltaY);
    setDist(newDist);
    if (timeLocked) setSpeed(calcSpeed(time, newDist));
    else setTime(calcTime(newDist, speed));
  };

  const handleSpeed = (evt, value) => {
    const newSpeed = value || speed + stepSpeed * -Math.sign(evt.deltaY);
    setSpeed(newSpeed);
    if (timeLocked) setDist(calcDist(time, newSpeed));
    else setTime(calcTime(dist, newSpeed));
  };

  const toggleTimeLock = () => setTimeLocked(!timeLocked);

  const kph = speed / 1000;
  const mpk = 60 / kph;
  const ms = [mpk, (mpk % 1) * 60].map(ff00).join(":");

  return (
    <>
      <section>
        <Typography component="h1" variant="h6">
          Time
        </Typography>
        <TimePicker time={time} onChange={handleTime} step={1} />
        <IconButton onClick={toggleTimeLock}>
          {timeLocked ? <LockIconOutlined /> : <LockOpenIconOutlined />}
        </IconButton>
      </section>
      <section>
        <Typography component="h1" variant="h6">
          {`Distance ${(dist / 1000).toFixed(1)}km`}
        </Typography>
      </section>
      <section>
        <DistancePicker color="primary" value={dist} onChange={handleDist} step={stepDist} />
        <Typography component="h1" variant="h6">
          {`Pace ${ms}/km (${kph.toFixed(1)}kph)`}
        </Typography>
        <SpeedPicker color="secondary" value={speed} onChange={handleSpeed} step={stepSpeed} />
      </section>
    </>
  );
};

export default Main;
