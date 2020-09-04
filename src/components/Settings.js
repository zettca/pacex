import React from "react";
import { makeStyles } from "@material-ui/core";
import SplitButton from "./SplitButton";

const useStyles = makeStyles((theme) => ({
  root: {
    float: "right",
    "& > button": {
      margin: theme.spacing(0, 1),
    },
  },
}));

// eslint-disable-next-line react/prop-types
const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SplitButton options={["Short", "Medium", "Long"]} />
      <SplitButton options={["Time", "Distance", "Pace"]} />
    </div>
  );
};

export default Settings;
