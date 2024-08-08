import { useCallback, useRef } from "react";
import { useSearchParams, type NavigateOptions } from "react-router-dom";

type Params = Record<string, string | number | null | undefined>;

const REPLACE_THRESHOLD = 6_000;

/** Adds `newParams` to `URLSearchParams`, or removes if value is nullish */
const setParams = (newParams: Params) => (params: URLSearchParams) => {
  for (const [key, value] of Object.entries(newParams)) {
    if (value != null) {
      params.set(key, String(value));
    } else {
      params.delete(key);
    }
  }
  // params.sort();
  return params;
};

export function useSetParams() {
  const [, setSearchParams] = useSearchParams();
  const lastUpdated = useRef(0);

  return useCallback(
    (params: Params, opts?: NavigateOptions) => {
      const now = Date.now();
      const replace = now - lastUpdated.current < REPLACE_THRESHOLD;
      lastUpdated.current = now;
      setSearchParams(setParams(params), { replace, ...opts });
    },
    [setSearchParams],
  );
}
