import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ProfileLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 20px;
  background-color: #f2f2f2;
  transition: 0.4s ease opacity;

  &.selected {
    background-color: #e1e1e1;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ProfileHeader = () => (
  <Container>
    <ProfileLink to="/profile/my-answer" activeClassName="selected">
      My answer
    </ProfileLink>
    <ProfileLink to="/profile/all-answers" activeClassName="selected">
      My answer
    </ProfileLink>
  </Container>
);

export default ProfileHeader;
