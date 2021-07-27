import React from "react";
import { Route, Redirect } from "react-router-dom";
import route from "../../route";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to={route.signIn} />
      }
    />
  );
};

export default PrivateRoute;
