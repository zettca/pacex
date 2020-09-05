import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core";
import SplitButton from "./SplitButton";
import SliderPicker from "./SliderPicker";
import { ff00, secsToHms, useCalc, useSettings } from "../utils";
import { DISTANCES } from "../utils/useSettings";
import styles from "./styles";

// const calcOptions = ["Time", "Distance", "Pace"];

const Main = ({ classes }) => {
  const [distSettings, setDistSetting] = useSettings();
  // const [calcSetting, setCalcSetting] = useState(calcOptions);
  const [time, dist, speed, update] = useCalc({
    time: 90 * 60 + 20,
    dist: 10000,
    speed: 10000,
  });

  useEffect(() => {
    update("time", distSettings.time.value);
    update("dist", distSettings.dist.value);
    // update("speed", distSettings.speed.value);
  }, [distSettings, update]);

  const handleTime = (evt, value) => update("time", value);
  const handleDist = (evt, value) => update("dist", value);
  const handleSpeed = (evt, value) => update("speed", value);
  const handleDistSetting = (evt, value) => setDistSetting(value);

  const kph = speed / 1000;
  const mpk = 60 / kph;
  const ms = [mpk, (mpk % 1) * 60].map(ff00).join(":");

  return (
    <>
      <section>
        <div className={classes.settings}>
          <SplitButton onChange={handleDistSetting} options={Object.keys(DISTANCES)} />
          {/* <SplitButton onChange={(s) => setCalcSetting(s)} options={calcOptions} /> */}
        </div>
      </section>
      <SliderPicker
        title={`Time ${secsToHms(time)}`}
        onChange={handleTime}
        {...distSettings.time}
        value={time}
      />
      <SliderPicker
        title={`Distance ${(dist / 1000).toFixed(1)}km`}
        onChange={handleDist}
        {...distSettings.dist}
        value={dist}
      />
      <SliderPicker
        title={`Pace ${ms}/km (${kph.toFixed(1)}kph)`}
        onChange={handleSpeed}
        {...distSettings.speed}
        value={speed}
      />
    </>
  );
};

export default withStyles(styles)(Main);
