import React, { useEffect } from "react";
import { Slider, Typography, makeStyles } from "@material-ui/core";
import ToggleLock from "../ToggleLock";
import { useSliderExpand } from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  mark: {
    color: theme.palette.primary.light,
  },
  titleContainer: {
    display: "flex",
  },
  title: {
    display: "inline-block",
    marginRight: theme.spacing(1),
  },
}));

const SliderPicker = (props) => {
  const {
    title,
    locked = false,
    buttons = [],
    onChange,
    onLockClick,
    min,
    max,
    value,
    ...others
  } = props;
  const classes = useStyles();
  const [sliderProps, setValue] = useSliderExpand({ min, max, value });

  useEffect(() => {
    setValue(value);
  }, [value]);

  const handleChange = (evt, val) => {
    sliderProps.onChange(evt, val);
    onChange?.(evt, val);
  };

  const marks = [
    { value: sliderProps.max, label: "+" },
    ...buttons.filter((btn) => btn.value < sliderProps.max),
  ];

  return (
    <section className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography component="h1" variant="h6" className={classes.title}>
          {title}
        </Typography>
        <ToggleLock locked={locked} onClick={onLockClick} />
      </div>
      <Slider
        classes={{ markLabel: classes.mark }}
        disabled={locked}
        {...sliderProps}
        marks={marks}
        onChange={handleChange}
        {...others}
      />
    </section>
  );
};

export default SliderPicker;
