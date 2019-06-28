import React, { Fragment } from "react";
import styled from "styled-components";
import styledMap from 'styled-map';

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
  `}
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

const User = styled.li``;

const IsComing = styled.span``;

const Count = styled(Name)``;

const AllAnswers = ({ userData: { picture: { data : { url }}, name }, count, selectValue }) => {
  return (
    <Container>
      <InputSearch type="search" />
      <Users>
        <User>
          <Avatar src={url} defaultHeight defaultWidth alt={name} />
          <Name> {name} </Name>
          {selectValue === 2 ? (
            <IsComing> YES </IsComing>
          ) : <IsComing> NO </IsComing>}
          <Count> {count} </Count>
        </User>
      </Users>
    </Container>
  );
};

export default AllAnswers;
