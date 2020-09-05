import React, { useMemo } from "react";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import renderLayout from "./layout/renderLayout";
import Main from "./components/Main";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => createMuiTheme({ palette: { type: prefersDarkMode ? "dark" : "light" } }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {renderLayout(<Main />)}
    </ThemeProvider>
  );
};

export default App;
