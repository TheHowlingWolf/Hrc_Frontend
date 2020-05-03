import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Registration from "./user/Registration";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/members" component={Home} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
};

export default Routes;
