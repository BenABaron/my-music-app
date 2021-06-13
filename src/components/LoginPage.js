import React, { Component } from 'react';
import TextField from './TextField';
import LoginButton from './LoginButton';

class LoginPage extends Component {

  render() { 

    console.log(this.props);

    return (  
      <div>
        <TextField label="username"/>
        <TextField label="password"/>
        <LoginButton name="Ben" onLoginClick={this.props.onLoginClick.bind(this)}/>
      </div>
    );
  }
}

export default LoginPage;