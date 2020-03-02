import React from "react";
import { Typography } from "@material-ui/core";

const withSection = (title, element) => (
  <section>
    <Typography component="h1" variant="h6">
      {title}
    </Typography>
    {element}
  </section>
);

export default withSection;
