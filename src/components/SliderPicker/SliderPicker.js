import React from "react";
import { Button, Slider, Typography, withStyles } from "@material-ui/core";
import styles from "./styles";

const SliderPicker = ({ classes, title, buttons = [], onChange, ...others }) => (
  <section className={classes.root}>
    <Typography component="h1" variant="h6">
      {title}
    </Typography>
    <Slider onChange={onChange} onWheel={onChange} {...others} />
    <div>
      {buttons.map((d) => (
        <Button key={`d${d.value}`} onClick={(e) => onChange(e, d.value)}>
          {d.label}
        </Button>
      ))}
    </div>
  </section>
);

export default withStyles(styles)(SliderPicker);
