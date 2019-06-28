import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import ProfileHeader from "./ProfileHeader";
import MyAnswer from "./MyAnswer";
import AllAnswers from "./AllAnswers";
import { JS, LS } from "../utils";
import ProfilePopup from "../Popups/ProfilePopup";

const Main = styled.div`
  margin: 40px;
  text-align: center;
`;

const Profile = ({ userData }) => {
  const [userForm] = useState(JS.p(LS.get("userForm")));
  const [isVisiblePopup, updatePopup] = useState(false);
  const [count, getStateCount] = useState(userForm.count || 1);
  const [selectValue, getSelectValue] = useState(userForm.selectValue || 1);

  const getUpdateData = (method, value) => method(value);

  return (
    <Main>
      <ProfileHeader />
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
              updatePopup={updatePopup}
            />
          )}
        />
        <Route
          exact
          path="/profile/all-answers"
          render={() => (
            <AllAnswers currentId={userData.id} name={userData.name} />
          )}
        />
      </Switch>
      {isVisiblePopup && <ProfilePopup updatePopup={updatePopup} />}
    </Main>
  );
};

export default Profile;
