import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import renderLayout from "./layout/renderLayout";
import Main from "./components/Main";
import * as serviceWorker from "./serviceWorker";

const App = () => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {renderLayout(<Main />)}
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
