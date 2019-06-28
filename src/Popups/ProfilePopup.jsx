import React from "react";
import styled from "styled-components";

import { ClosePopup, Container, Popup } from "./WrapperStyles";

const ProfileContainer = styled(Container)``;

const Profile = styled(Popup)``;

const CloseProfilePopup = styled(ClosePopup)``;

const Desc = styled.span`
  font-size: 24px;
  line-height: 26px;
`;

const ProfilePopup = ({ updatePopup }) => (
  <ProfileContainer>
    <Profile>
      <CloseProfilePopup onClick={() => updatePopup(false)}>
        {" "}
        X{" "}
      </CloseProfilePopup>
      <Desc> Когда будет все известно - заполните </Desc>
    </Profile>
  </ProfileContainer>
);

export default ProfilePopup;
