import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Redirect } from "react-router-dom";
import WrappedRoute from "./WrappedRoute"; // Update this line

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import CashierLayout from "layouts/Cashier.js";
import RTLLayout from "layouts/RTL.js";
import SignIn from "views/Auth/SignIn";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <WrappedRoute path={`/auth`} component={AuthLayout} />
        <WrappedRoute path={`/admin`} component={AdminLayout} />
        <WrappedRoute path={`/cashier`} component={CashierLayout} />
        <WrappedRoute path={`/rtl`} component={RTLLayout} />
        <WrappedRoute path={`/signin`} component={SignIn} />
        <Redirect from={`/`} to="/auth/signin" />
      </Switch>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
