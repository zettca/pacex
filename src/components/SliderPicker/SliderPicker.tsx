import { useEffect } from "react";
import { Slider, Typography, SliderProps, Radio, RadioProps, makeStyles } from "@material-ui/core";
import type { SliderConfig, SliderParams } from "~/types";
import useSliderExpand from "~/hooks/useSliderExpand";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(3),
    },
  },
  mark: {
    color: theme.palette.primary.light,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    display: "inline-block",
    marginRight: theme.spacing(1),
  },
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
        <Typography id={id} component="h1" variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Radio color="primary" size="small" checked={locked} onClick={onLockClick} />
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
