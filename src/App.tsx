import { Suspense, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  colors,
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import "~/i18n/config";

const router = createBrowserRouter(
  [
    {
      lazy: () => import("./routes/layout"),
      children: [{ path: "/", lazy: () => import("./routes/index") }],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export const App = () => {
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
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
};
