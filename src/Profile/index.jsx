import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import MyAnswer from "./MyAnswer";
import AllAnswers from "./AllAnswers";
import { JS, LS } from "../utils";

const Main = styled.main`
  margin: 40px;
  text-align: center;
`;

const Profile = () => {
  const [userData] = useState(JS.p(LS.get("userData")));

  return (
    <>
      <Header/>
      <Main>
        <Switch>
          <Route exact path="/profile/my-answer" render={() => <MyAnswer userData={userData}/>}/>
          <Route exact path="/profile/all-answers" component={AllAnswers}/>
        </Switch>
      </Main>
    </>
  )
};

export default Profile;
