import { useEffect, useRef, useState } from "react";

export function useInterval(callback: () => any, delay?: number) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return;

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(id);
  }, [delay]);
}

export function useIntervalValue<T>(
  callback: () => T,
  delay?: number,
  defaultValue?: T,
) {
  const [value, setValue] = useState(defaultValue);

  useInterval(() => {
    setValue(callback());
  }, delay);

  return value;
}
