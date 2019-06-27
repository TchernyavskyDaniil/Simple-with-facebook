import React from 'react';
import FacebookLogin from 'react-facebook-login';

import { key } from "./key";

const App = () => {
  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId={key}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}

export default App;
