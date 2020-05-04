import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Registration from "./user/Registration";
import Member from "./core/Member";
import IndiMembers from "./core/IndiMembers";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
      </Switch>
    </Router>
  );
};

export default Routes;
