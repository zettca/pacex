import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  Fade,
  FormControlLabel,
  Radio,
  Slider,
  Typography,
  type RadioProps,
  type SliderProps,
} from "@mui/material";
import { useSliderExpand } from "~/hooks/useSliderExpand";
import type { Mark, SliderConfig } from "~/types";
import { SplitButton } from "./SplitButton";

export interface SliderPickerProps
  extends Omit<SliderProps, "onChange" | "onChangeCommitted"> {
  selected: boolean;
  buttons?: SliderConfig["buttons"];
  value: number;
  onChange?: (value: number) => void;
  onChangeCommitted?: (value: number) => void;
  onLockClick?: RadioProps["onClick"];
}

const SliderPicker: React.FC<SliderPickerProps> = ({
  title,
  selected = false,
  buttons = [],
  min,
  max,
  value,
  onChange,
  onChangeCommitted,
  onLockClick,
  ...others
}) => {
  const { t } = useTranslation(undefined, { keyPrefix: "marks" });
  const id = useId();
  const sliderProps = useSliderExpand({ min, max, value });

  const marks = buttons.map<Mark>((btn) => ({
    value: btn.value,
    label: t(btn.label as any),
  }));

  const visibleMarks = marks
    .filter((btn) => btn.value > value * 0.06)
    .filter((btn) => btn.value < sliderProps.max)
    .concat({ value: sliderProps.max, label: "+" });

  const handleChange = (val: number) => {
    sliderProps.onChange(val);
    onChange?.(val);
  };

  return (
    <section aria-labelledby={id}>
      <div className="flex items-center gap-1">
        <FormControlLabel
          className="mr-0"
          control={
            <Radio size="small" checked={selected} onClick={onLockClick} />
          }
          label={
            <Typography
              id={id}
              color={selected ? "primary" : "text.secondary"}
              component="h2"
              variant="h6"
            >
              {title}
            </Typography>
          }
        />
        {!selected && (
          <SplitButton
            options={marks}
            onChange={(val) => {
              handleChange?.(val);
            }}
          />
        )}
      </div>
      <Fade in={!selected} timeout={800}>
        <Slider
          disabled={selected}
          classes={{ markLabel: "text-current" }}
          {...sliderProps}
          aria-labelledby={id}
          size="small"
          marks={visibleMarks}
          onChange={(evt, val) => {
            sliderProps.onChange(val as number);
            onChange?.(val as number);
          }}
          onChangeCommitted={(evt, val) => {
            sliderProps.onChangeCommitted();
            onChangeCommitted?.(val as number);
          }}
          {...others}
        />
      </Fade>
    </section>
  );
};

export default SliderPicker;
