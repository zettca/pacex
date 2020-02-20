import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import withLayout from "./withLayout";
import Main from "./components/Main";

const App = () => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {withLayout(Main)}
    </ThemeProvider>
  );
};

export default App;
