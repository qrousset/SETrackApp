import React from "react";
import "./styles.scss";
import AccountMenu from "./components/AccountMenuButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Graph from "./pages/graph";

function App() {
  return (
    <Router>
      <AccountMenu />
      <div id="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/graph" component={Graph} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
