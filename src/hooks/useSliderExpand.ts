import { useEffect, useState } from "react";

/** Allows a Slider to extend further than 100% */
export const useSliderExpand = ({
  min: initMin = 0,
  max: initMax = 100,
  value: valueParam = 10,
  incMult = 1.2,
  decMult = 1.1,
  incThresh = 0.95,
  decThresh = 0.6,
}) => {
  const [max, setMax] = useState(initMax);
  const [value, setValue] = useState(valueParam);

  useEffect(() => {
    setValue(valueParam);
    setMax(
      (currMax) =>
        (valueParam > currMax && valueParam) ||
        (valueParam <= initMax && initMax) ||
        currMax,
    );
  }, [valueParam, initMax]);

  const onChange = (val: number) => {
    if (value === val && val < max) return;
    setValue(val);
  };

  const onChangeCommitted = () => {
    if (value < initMax) setMax(initMax);
    else if (value < max * decThresh) setMax(Math.floor(value * decMult));
    else if (value > max * incThresh) setMax(Math.floor(value * incMult));
  };

  return { min: initMin, max, value, onChange, onChangeCommitted } as const;
};
