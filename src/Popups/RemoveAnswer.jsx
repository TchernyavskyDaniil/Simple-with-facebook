import React from "react";
import styled from "styled-components";

import { ClosePopup, Container, Popup } from "./WrapperStyles";
import { JS, LS } from "../utils";

const ProfileContainer = styled(Container)``;

const Profile = styled(Popup)``;

const CloseProfilePopup = styled(ClosePopup)``;

const Desc = styled.span`
  font-size: 20px;
  line-height: 24px;
`;

const PopupInfo = styled.div`
  width: 80%;
`;

const Buttons = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
  cursor: pointer;
  padding: 10px;
  margin-top: 6px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 6px;
  font-size: 14px;
  transition: 0.4s ease;
  font-weight: 500;

  &:hover {
    border: 1px solid #013065;
    background-color: #013065;
    color: white;
  }
`;

const RemoveAnswer = ({
  updatePopup,
  name,
  updatedUsers,
  currentId,
  updateList
}) => {
  const removeUser = () => {
    const filteredUsers = updatedUsers.filter(user => user.id !== currentId);

    updateList(filteredUsers);
    updatePopup(false);
    LS.set("usersData", JS.s(filteredUsers));
  };

  return (
    <ProfileContainer>
      <Profile>
        <CloseProfilePopup onClick={() => updatePopup(false)}>
          {" "}
          X{" "}
        </CloseProfilePopup>
        <PopupInfo>
          <Desc>
            {" "}
            Я, {name} хочу отказаться от своего решения и удалить свой ответ{" "}
          </Desc>
          <Buttons>
            <Button onClick={removeUser}> Да </Button>
            <Button onClick={() => updatePopup(false)}> Нет </Button>
          </Buttons>
        </PopupInfo>
      </Profile>
    </ProfileContainer>
  );
};

export default RemoveAnswer;
