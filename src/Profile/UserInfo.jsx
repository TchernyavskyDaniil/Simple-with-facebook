import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";

const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

const Name = styled.span`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 20px;
  color: black;

  background-color: ${styledMap`
    default: white;
    currentUser: red;
  `};
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

const UserInfo = ({ data, updatePopup, currentId }) => (
  <User onClick={() => currentId === data.id && updatePopup(true)}>
    <Avatar src={data.img} defaultHeight defaultWidth alt={data.name} />
    <Name currentUser={data.id === data.currentId}> {data.name} </Name>
    {data.selectValue === 2 ? (
      <>
        <IsComing> YES </IsComing>
        {data.count > 0 && (
          <Count currentUser={data.id === data.currentId}> {data.count} </Count>
        )}
      </>
    ) : (
      <IsComing> NO </IsComing>
    )}
  </User>
);

export default UserInfo;
