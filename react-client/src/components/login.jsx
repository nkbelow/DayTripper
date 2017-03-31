import React from 'react';
import $ from 'jquery';
import GoogleLogin from 'react-google-login';
import GoogleCredentials from '../../../server/middleware/authConfig';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('body').addClass('loginPage');
  }
  componentWillUnmount() {
    $('body').removeClass('loginPage');
  }
  responseGoogle(response) {
    console.log(response);
    $.ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + response.accessToken);
      }
    });
    
  }
  render() {
    return (
      <div>
        <div className='loginLogo row'>
        </div>
        <div className='center row'>
          <div className='col-md-12'>
          <GoogleLogin
          clientId={GoogleCredentials.googleClientId}
          buttonText="Login"
          onSuccess={this.responseGoogle.bind(this)} />
          </div>
        </div>
      </div>

    );
  }
}

export default Login;