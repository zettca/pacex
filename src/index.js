import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import renderLayout from "./layout/renderLayout";
import Main from "./components/Main";
import * as serviceWorker from "./serviceWorker";

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

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
