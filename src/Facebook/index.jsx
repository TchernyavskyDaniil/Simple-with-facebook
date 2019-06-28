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
  state = {
    isError: false,
  };

  responseFacebook = ({ picture, name, id }) => {
    if (id) {
      !LS.get("userForm") &&
      LS.set("userForm", JS.s({ count: 1, selectValue: 1 }));
      this.props.getUserData({ picture, name, id });
      this.props.getPermitted(true);
      this.props.push("/profile/my-answer");
    } else {
      this.setState({ isError: true });
    }
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
        {this.state.isError && (<p> Произошла ошибка при авторизации </p>)}
      </FacebookContainer>
    );
  }
}

export default Facebook;
