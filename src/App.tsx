import { lazy, Suspense, useMemo } from "react";
import { CssBaseline, StyledEngineProvider, colors, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";

import "./i18n";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const Main = lazy(() => import("~/components/Main"));

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: { main: colors.orange[400] || colors.teal[400] },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <Suspense>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Main />
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
};

export default App;
