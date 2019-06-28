import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: PrivateComponent,
  render: Render = null,
  permitted,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      permitted ? (
        Render ? (
          Render(props)
        ) : (
          <PrivateComponent {...props} />
        )
      ) : (
        <Redirect
          to={{
            pathname: "/facebook-auth"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
