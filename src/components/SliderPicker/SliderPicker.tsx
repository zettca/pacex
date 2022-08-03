import { useEffect } from "react";
import {
  Fade,
  FormControlLabel,
  Radio,
  RadioProps,
  Slider,
  SliderProps,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import type { SliderConfig, SliderParams } from "~/types";
import useSliderExpand from "~/hooks/useSliderExpand";

const useStyles = makeStyles((theme) => ({
  root: {},
  mark: {
    cursor: "pointer",
    color: theme.palette.primary.light,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: theme.palette.text.secondary,
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
  id,
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
  const classes = useStyles();
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
    <section className={classes.root}>
      <div className={classes.titleContainer}>
        <FormControlLabel
          control={<Radio size="small" checked={locked} onClick={onLockClick} />}
          label={
            <Typography
              color={locked ? "primary" : "initial"}
              component="h1"
              variant="h6"
              className={classes.title}
            >
              {title}
            </Typography>
          }
        />
      </div>
      <Fade in={!locked} timeout={800}>
        <Slider
          classes={{ markLabel: classes.mark }}
          disabled={locked}
          aria-labelledby={id}
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
