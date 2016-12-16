import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <AppBar
          title="拯救小珈"
        />
        <div className="login-page-text-wrapper">
          <TextField
            className="login-text"
            hintText="学号"
          />
          <TextField
            hintText="密码"
          />
          <RaisedButton
            className="login-btn"
            label="登录"
            primary={true}
            fullWidth={true}
          />
        </div>
        <footer className="login-footer">
          <p>©拯救小珈团队</p>
        </footer>
      </div>
    )
  }
}

export default LoginPage;