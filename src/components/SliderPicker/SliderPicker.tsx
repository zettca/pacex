import { useEffect } from "react";
import {
  Slider,
  Typography,
  SliderProps,
  Radio,
  RadioProps,
  makeStyles,
  FormControlLabel,
} from "@material-ui/core";
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
  title: {},
}));

export interface SliderPickerProps extends Omit<SliderProps, "onChange"> {
  locked: boolean;
  buttons: SliderConfig["buttons"];
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
          control={<Radio color="primary" size="small" checked={locked} onClick={onLockClick} />}
          label={
            <Typography id={id} component="h1" variant="h6" className={classes.title}>
              {title}
            </Typography>
          }
        />
      </div>
      <Slider
        classes={{ markLabel: classes.mark }}
        disabled={locked}
        aria-labelledby={id}
        {...sliderProps}
        marks={marks}
        onChange={handleChange}
        {...others}
      />
    </section>
  );
};

export default SliderPicker;
