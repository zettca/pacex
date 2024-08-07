export type Unit = "time" | "dist" | "speed";

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
