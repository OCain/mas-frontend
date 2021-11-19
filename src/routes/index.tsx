import React from "react";
import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";
import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/dashboard"  exact component={Dashboard} isPrivate/>
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Routes;
