import React from "react";
import "./styles.scss";
import AccountMenu from "./components/AccountMenuButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Graph from "./pages/graph";
import Upcoming from "./pages/upcoming";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Form from "./components/Form";


function App() {
  return (
    <Router>
      <AccountMenu />
      <div id="wrapper">
        <Form />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/graph" component={Graph} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
