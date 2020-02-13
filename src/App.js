import React from "react";
// import { store } from "store";
// import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import withLayout from "./withLayout";
import Main from "./components/Main";
// import "./App.css";

const theme = createMuiTheme({
  status: {
    danger: "yellow",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {withLayout(Main)}
  </ThemeProvider>
);

export default App;
