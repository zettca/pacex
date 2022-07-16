export type Mark = {
  label: string;
  value: number;
};

export type SliderParams = {
  min: number;
  max: number;
  value: number;
  onChange: (evt: React.ChangeEvent, val: number) => void;
  onChangeCommitted: () => void;
};

export type SliderConfig = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  buttons?: Mark[];
};

export type DistanceSetting = Record<"time" | "dist" | "speed", SliderConfig>;

export type DISTANCES = "DEFAULT" | "ALL" | "SHORT" | "MEDIUM" | "LONG" | "ULTRA";
