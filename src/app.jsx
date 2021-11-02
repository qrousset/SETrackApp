import React from "react";
import "./App.scss";
import AccountMenu from "./components/AccountMenuButton";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Graph from "./pages/graph";

//https://levelup.gitconnected.com/material-ui-how-to-implement-dark-mode-and-edit-theme-colors-effcfa0893b9

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <AccountMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/graph" component={Graph} />
      </Switch>
    </Router>
  );
}

export default App;
