import React from "react";
import styled from "styled-components";
import { JS, LS } from "../utils";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileLabel = styled.label``;

const MeLabel = styled(ProfileLabel)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WithMeLabel = styled(ProfileLabel)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
`;

const Desc = styled.span`
  font-weight: 600;
`;

const MeInfo = styled.p`
  margin: 6px 0 20px 0;
  padding: 6px 20px;
  border: 1px solid lightgray;
`;

const WithMeCount = styled.input`
  width: 100px;
`;

const MySelect = styled.select`
  width: 200px;
  margin-top: 20px;
`;

const Submit = styled.button`
  margin-top: 20px;
`;

const MyAnswer = ({
  userData,
  count,
  getStateCount,
  selectValue,
  getSelectValue,
  getUpdateData,
  updatePopup
}) => {
  const submitForm = e => {
    e.preventDefault();

    if (selectValue !== 1) {
      const {
        picture: {
          data: { url }
        },
        name,
        id
      } = userData;
      let users = JS.p(LS.get("usersData"));
      const newUserData = {
        id,
        img: url,
        name,
        count,
        selectValue
      };

      // Update data for current user
      if (users) {
        users = users.filter(user => user.id !== id);
        users.push(newUserData);
      } else {
        users = [newUserData];
      }

      LS.set("userForm", JS.s({ count, selectValue }));
      LS.set("usersData", JS.s(users));
    } else {
      updatePopup(true);
    }
  };

  return (
    <Form action="" onSubmit={submitForm}>
      <MeLabel htmlFor="profile-me">
        <Desc> Me </Desc>
        <MeInfo id="profile-me">{userData.name || "Имя не известно"}</MeInfo>
      </MeLabel>
      <WithMeLabel htmlFor="profile-with-me">
        <Desc> With me </Desc>
        <WithMeCount
          onChange={e => getUpdateData(getStateCount, +e.target.value)}
          id="profile-with-me"
          value={count}
          type="number"
          min="0"
        />
      </WithMeLabel>
      <MySelect
        onChange={e => getUpdateData(getSelectValue, +e.target.value)}
        value={selectValue}
      >
        <option value="1"> Нужно выбрать </option>
        <option value="2"> Я точно приду </option>
        <option value="3"> Я точно не приду </option>
      </MySelect>
      <Submit type="submit"> Отправить </Submit>
    </Form>
  );
};

export default MyAnswer;
