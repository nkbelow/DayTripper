import React from 'react';

class Login extends React.Componenet {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.pressEnterLogin = this.pressEnterLogin.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  };

  pressEnterLogin(e) {
    if (e.charCode == 13) {
      this.login();
    }
  };

  onLogin() {
    const loginInfo = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(loginInfo);
  };

  onUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  };

  onPasswordChange(e) => {
    this.setState({
      password: e.target.value
    })
  };

  render() {
    var inputBox = {
      width: 200,
      marginRight: 15,
      marginLeft: 5,
      textAlign: 'center',
      fontFamily: 'Century Gothic',
      fontSize: 17.5,
      border: 0,
      outline: 0,
      background: 'transparent',
      borderBottom: '1px solid black',
      display: 'inline-block'
    };

    return (
      <div>
        USERNAME
        <input
          style={inputBox}
          type="text"
          onChange={this.onUsernameChange}
        />
      <div>
      </div>
        PASSWORD
        <input
          style={inputBox}
          type="text"
          onChange={this.onPasswordChange}
          onKeyPress={this.pressEnterLogin}
        />
      </div>
    )
  };
};

export default Login;