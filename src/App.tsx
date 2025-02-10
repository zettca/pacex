import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  colors,
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
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

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: { palette: { primary: { main: colors.orange[400] } } },
    light: { palette: { primary: { main: colors.orange[600] } } },
  },
});

export function App() {
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
}
