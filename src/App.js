import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Facebook from "./Facebook";
import Profile from "./Profile";
import { LS } from "./utils";

const App = () => {
  const [isPermitted, getPermitted] = useState(false);
  return (
    <Switch>
      <Route
        exact
        path="/facebook-auth"
        render={props => (
          <Facebook push={props.history.push} getPermitted={getPermitted} />
        )}
      />
      <PrivateRoute
        path="/profile/my-answer"
        permitted={isPermitted}
        component={Profile}
      />
      <Redirect from="/" to="/facebook-auth" />
    </Switch>
  );
};

const PrivateRoute = ({ component: PrivateComponent, permitted, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      permitted ? (
        <PrivateComponent {...props} />
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

export default App;
