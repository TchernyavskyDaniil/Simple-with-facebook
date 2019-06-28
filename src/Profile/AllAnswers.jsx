import React, { useState } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { JS, LS } from "../utils";

const Container = styled.div``;

const InputSearch = styled.input``;

const Avatar = styled.img`
  width: ${styledMap`
    default: 100px;
    defaultWidth: 50px;
  `};

  height: ${styledMap`
    default: 100px;
    defaultHeight: 50px;
  `};
`;

const Name = styled.span`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

const Users = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding: 6px;
`;

const User = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const IsComing = styled.span``;

const Count = styled(Name)``;

const AllAnswers = () => {
  const [users] = useState(JS.p(LS.get("usersData")) || []);
  return (
    <Container>
      <InputSearch type="search" />
      <Users>
        {users.map(({ id, img, name, count, selectValue }) => (
          <User key={id}>
            <Avatar src={img} defaultHeight defaultWidth alt={name} />
            <Name> {name} </Name>
            {selectValue === 2 ? (
              <IsComing> YES </IsComing>
            ) : (
              <IsComing> NO </IsComing>
            )}
            <Count> {count} </Count>
          </User>
        ))}
      </Users>
    </Container>
  );
};

export default AllAnswers;
