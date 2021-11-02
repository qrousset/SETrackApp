import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
    secondary: {
      main: "#b9f6ca",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
