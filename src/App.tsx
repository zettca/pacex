import { Suspense, useMemo } from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  colors,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    lazy: () => import("./pages/layout"),
    children: [{ path: "/", lazy: () => import("./pages/main") }],
  },
]);

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
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
};

export default App;
