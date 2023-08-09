import React from "react";
import { Route } from "react-router-dom";
import useAutoLogout from "./services/useAutoLogout";

const AutoLogoutWrapper = ({ children }) => {
  useAutoLogout();
  return children;
};

const WrappedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}>
    <AutoLogoutWrapper>
      <Component />
    </AutoLogoutWrapper>
  </Route>
);

export default WrappedRoute;
