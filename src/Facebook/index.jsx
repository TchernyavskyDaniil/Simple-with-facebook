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
    isError: false
  };

  getFormUserData = id => {
    const usersData = JS.p(LS.get("usersData"));
    const currentUser = usersData && usersData.find(user => user.id === id);

    // Added default settings form for new user
    if (!LS.get("userForm") || !currentUser) {
      LS.set("userForm", JS.s({ count: 1, selectValue: 1 }));
    } else if (usersData) {
      const currentUser = usersData.find(user => user.id === id);

      LS.set(
        "userForm",
        JS.s({
          count: currentUser.count,
          selectValue: currentUser.selectValue
        })
      );
    }
  };

  responseFacebook = ({ picture, name, id }) => {
    if (id) {
      this.getFormUserData(id);

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
        {this.state.isError && <p> Произошла ошибка при авторизации </p>}
      </FacebookContainer>
    );
  }
}

export default Facebook;
