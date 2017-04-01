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
    console.log(response.accessToken);
    $.ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader('access_token', response.accessToken);
      }
    });
    $.ajax({
      url: '/authenticate',
      type: 'GET',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.props.history.push('/homepage');
    this.props.setToken(response.accessToken);
  }
  render() {
    return (
      <div className='container-fluid'>
        <img className='center-block img-responsive' src='../../media-lib/day-tripper-logo-transparent.png' />
        <div className='center'>
          <GoogleLogin
          className='btn btn-lg btn-primary'
          clientId={GoogleCredentials.googleClientId}
          buttonText="Login With Google"
          onSuccess={this.responseGoogle.bind(this)} />
        </div>
      </div>

    );
  }
}

export default Login;