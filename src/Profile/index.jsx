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

const Profile = ({ userData }) => {
  const [userForm] = useState(JS.p(LS.get("userForm")));
  const [count, getStateCount] = useState(userForm.count || 1);
  const [selectValue, getSelectValue] = useState(userForm.selectValue || 1);

  const getUpdateData = (method, value) => method(value);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route
            exact
            path="/profile/my-answer"
            render={() => (
              <MyAnswer
                userData={userData}
                count={count}
                getStateCount={getStateCount}
                selectValue={selectValue}
                getSelectValue={getSelectValue}
                getUpdateData={getUpdateData}
              />
            )}
          />
          <Route exact path="/profile/all-answers" component={AllAnswers} />
        </Switch>
      </Main>
    </>
  );
};

export default Profile;
