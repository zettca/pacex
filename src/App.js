import React, { useState } from "react";
// import { store } from "store";
// import { Provider } from "react-redux";
import { CssBaseline, Button } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import withLayout from "./withLayout";
import Main from "./components/Main";

const App = () => {
  const [themeType, setThemeType] = useState("dark");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeType,
        },
      }),
    [themeType],
  );

  const toggleTheme = () => setThemeType(themeType === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      {withLayout(Main)}
    </ThemeProvider>
  );
};

export default App;
