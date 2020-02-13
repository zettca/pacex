import React from "react";
import { Container, Paper } from "@material-ui/core";

const withLayout = Component => (
  <Container component="main">
    <Paper elevation={3}>
      <Component />
    </Paper>
  </Container>
);

export default withLayout;
