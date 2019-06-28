import React, { useState } from "react";
import styled from "styled-components";

import { JS, LS } from "../utils";
import UserInfo from "./UserInfo";
import RemoveAnswer from "../Popups/RemoveAnswer";

const Container = styled.div``;

const InputSearch = styled.input``;

const Users = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding: 6px;
`;

const AllAnswers = ({ currentId, name }) => {
  const [users] = useState(JS.p(LS.get("usersData")) || []);
  const [updatedUsers, updateList] = useState(users);
  const [isVisiblePopup, updatePopup] = useState(false);

  // Or using debounce for requests
  const getFilteredData = e =>
    updateList(users.filter(user => user.name.includes(e.target.value)));

  return (
    <Container>
      <InputSearch
        onChange={getFilteredData}
        type="search"
        placeholder="Поиск по имени"
      />
      <Users>
        {updatedUsers.map(({ id, img, name, count, selectValue }) => (
          <UserInfo
            key={id}
            currentId={currentId}
            data={{ id, img, name, count, selectValue, currentId }}
            updatePopup={updatePopup}
          />
        ))}
      </Users>
      {isVisiblePopup && (
        <RemoveAnswer
          name={name}
          currentId={currentId}
          updatedUsers={updatedUsers}
          updateList={updateList}
          updatePopup={updatePopup}
        />
      )}
    </Container>
  );
};

export default AllAnswers;
