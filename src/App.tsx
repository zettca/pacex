import { lazy, Suspense, useMemo } from "react";
import { CssBaseline, ThemeProvider, colors, useMediaQuery, createTheme } from "@material-ui/core";
import "./i18n";

const Main = lazy(() => import("~/components/Main"));

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
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
