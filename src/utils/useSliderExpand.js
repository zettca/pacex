import { useState } from "react";

const useSliderExpand = ({
  min: initMin = 0,
  max: initMax = 100,
  value: initValue = 10,
  growBy = 1.4,
  shrinkBy = 0.6,
}) => {
  const [max, setMax] = useState(initMax);
  const [value, setValue] = useState(initValue);

  const incMax = (val) => setMax(Math.floor(val * growBy));
  const decMax = (val) => setMax(Math.floor(val * shrinkBy));

  const onChange = (evt, val) => {
    if (value === val && val < max) return;
    setValue(val);
  };

  const onChangeCommitted = () => {
    const growThresh = max * 0.94;
    const shrinkThresh = max * 0.6;

    if (value < initMax) return setMax(initMax);
    if (value < shrinkThresh) return decMax(value); // check for new val too ?
    if (value > growThresh) return incMax(value);
    return null;
  };

  return [{ min: initMin, max, value, onChange, onChangeCommitted }, setValue];
};

export default useSliderExpand;
