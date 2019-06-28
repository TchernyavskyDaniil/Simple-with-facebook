import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Facebook from "./Facebook";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isPermitted, getPermitted] = useState(false);
  const [userData, getUserData] = useState({});
  return (
    <>
      <header />
      <main>
        <Switch>
          <Route
            exact
            path="/facebook-auth"
            render={props => (
              <Facebook
                push={props.history.push}
                getPermitted={getPermitted}
                getUserData={getUserData}
              />
            )}
          />
          <PrivateRoute
            path="/profile"
            permitted={isPermitted}
            render={() => <Profile userData={userData} />}
          />
          <Redirect from="/" to="/facebook-auth" />
        </Switch>
      </main>
      <footer />
    </>
  );
};

export default App;
