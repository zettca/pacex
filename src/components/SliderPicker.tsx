import { useEffect } from "react";
import {
  Box,
  Fade,
  FormControlLabel,
  Radio,
  RadioProps,
  Slider,
  SliderProps,
  styled,
  Typography,
} from "@mui/material";
import type { SliderConfig, SliderParams } from "~/types";
import useSliderExpand from "~/hooks/useSliderExpand";

const SliderX = styled(Slider)<SliderProps>(({ theme }) => ({
  "& .MuiSlider-markLabel": {
    cursor: "pointer",
    color: theme.palette.primary.light,
  },
}));

export interface SliderPickerProps extends Omit<SliderProps, "onChange"> {
  locked: boolean;
  buttons?: SliderConfig["buttons"];
  value: number;
  onChange?: SliderParams["onChange"];
  onLockClick?: RadioProps["onClick"];
}

const SliderPicker: React.FC<SliderPickerProps> = ({
  title,
  locked = false,
  buttons = [],
  onChange,
  onLockClick,
  min,
  max,
  value,
  ...others
}) => {
  const [sliderProps, setValue] = useSliderExpand({ min, max, value });

  useEffect(() => {
    setValue(value);
  }, [value, setValue]);

  const handleChange = (evt, val) => {
    sliderProps.onChange(evt, val);
    onChange?.(evt, val);
  };

  const marks = [
    ...buttons.filter((btn) => btn.value < sliderProps.max),
    { value: sliderProps.max, label: "+" },
  ];

  return (
    <section>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControlLabel
          control={
            <Radio size="small" checked={locked} onClick={onLockClick} />
          }
          label={
            <Typography
              color={locked ? "primary" : "text.secondary"}
              component="h1"
              variant="h6"
            >
              {title}
            </Typography>
          }
        />
      </Box>
      <Fade in={!locked} timeout={800}>
        <SliderX
          disabled={locked}
          {...sliderProps}
          size="small"
          marks={marks}
          onChange={handleChange}
          {...others}
        />
      </Fade>
    </section>
  );
};

export default SliderPicker;
