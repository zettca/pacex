import { useEffect, useId } from "react";
import {
  Box,
  Fade,
  FormControlLabel,
  Radio,
  Slider,
  styled,
  Typography,
  type RadioProps,
  type SliderProps,
} from "@mui/material";
import useSliderExpand from "~/hooks/useSliderExpand";
import type { SliderConfig, SliderParams } from "~/types";

const SliderX = styled(Slider)<SliderProps>(({ theme }) => ({
  "& .MuiSlider-markLabel": {
    cursor: "pointer",
    color: theme.palette.primary.light,
  },
}));

export interface SliderPickerProps extends Omit<SliderProps, "onChange"> {
  selected: boolean;
  buttons?: SliderConfig["buttons"];
  value: number;
  onChange?: SliderParams["onChange"];
  onLockClick?: RadioProps["onClick"];
}

const SliderPicker: React.FC<SliderPickerProps> = ({
  title,
  selected = false,
  buttons = [],
  onChange,
  onLockClick,
  min,
  max,
  value,
  ...others
}) => {
  const id = useId();
  const [sliderProps, setValue] = useSliderExpand({ min, max, value });

  useEffect(() => {
    setValue(value);
  }, [value, setValue]);

  const marks = [
    ...buttons.filter((btn) => btn.value < sliderProps.max),
    { value: sliderProps.max, label: "+" },
  ];

  return (
    <section>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControlLabel
          control={
            <Radio size="small" checked={selected} onClick={onLockClick} />
          }
          label={
            <Typography
              id={id}
              color={selected ? "primary" : "text.secondary"}
              component="h1"
              variant="h6"
            >
              {title}
            </Typography>
          }
        />
      </Box>
      <Fade in={!selected} timeout={800}>
        <SliderX
          disabled={selected}
          {...sliderProps}
          aria-labelledby={id}
          size="small"
          marks={marks}
          onChange={(evt, val) => {
            sliderProps.onChange(evt as any, val as number);
            onChange?.(evt as any, val as number);
          }}
          {...others}
        />
      </Fade>
    </section>
  );
};

export default SliderPicker;
