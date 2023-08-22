import { Suspense, useMemo } from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  colors,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Outlet } from "react-router-dom";

const App = () => {
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  const mode = useMemo(
    () => (prefersLightMode ? "light" : "dark"),
    [prefersLightMode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: colors.orange[400] },
        },
      }),
    [mode],
  );

  return (
    <Suspense>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
};

export default App;
