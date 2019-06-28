import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import styled from "styled-components";

import { JS, LS } from "../utils";
import { key } from "../key";

const FacebookContainer = styled.div`
  text-align: center;
  height: 100%;
  margin: 50px 0;
`;

const Title = styled.h1`
  margin: 0 0 40px 0;
`;

class Facebook extends Component {
  responseFacebook = ({ picture, name, id }) => {
    LS.set("userData", JS.s({ picture, name, id }));
    !LS.get("userForm") && LS.set("userForm", JS.s({ count: 1, selectValue: 1}));
    this.props.getPermitted(true);
    this.props.push("/profile/my-answer");
  };

  render() {
    return (
      <FacebookContainer>
        <Title> AUTH WITH FACEBOOK </Title>
        <FacebookLogin
          appId={key}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
      </FacebookContainer>
    );
  }
}

export default Facebook;
