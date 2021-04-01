import React, { Suspense, useMemo } from "react";
import {
  CssBaseline,
  ThemeProvider,
  colors,
  createMuiTheme,
  useMediaQuery,
} from "@material-ui/core";
import Main from "./components/Main";
import "./i18n";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: { main: colors.orange[400] || colors.teal[400] },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <Suspense fallback={<div />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
