import { Dispatch, SetStateAction, useState } from "react";
import type { SliderParams } from "~/types";

const useSliderExpand = ({
  min: initMin = 0,
  max: initMax = 100,
  value: initValue = 10,
  incMult = 1.2,
  decMult = 1.1,
  incThresh = 0.95,
  decThresh = 0.6,
}): [SliderParams, Dispatch<SetStateAction<number>>] => {
  const [max, setMax] = useState(initMax);
  const [value, setValue] = useState(initValue);

  const onChange: SliderParams["onChange"] = (evt, val) => {
    if (value === val && val < max) return;
    setValue(val);
  };

  const onChangeCommitted = () => {
    if (value < initMax) setMax(initMax);
    else if (value < max * decThresh) setMax(Math.floor(value * decMult));
    else if (value > max * incThresh) setMax(Math.floor(value * incMult));
  };

  return [{ min: initMin, max, value, onChange, onChangeCommitted }, setValue];
};

export default useSliderExpand;
