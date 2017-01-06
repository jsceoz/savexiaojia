import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import '../App.css';
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  handleLogin() {
    this.setState({
      isOpen: true
    });
    setTimeout('window.location.href="#/home"',1000)
  }


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
            type="password"
            hintText="密码"
          />
          <RaisedButton
            className="login-btn"
            label="登录"
            primary={true}
            onClick={this.handleLogin.bind(this)}
            fullWidth={true}
          />
        </div>
        <Snackbar
          open={this.state.isOpen}
          message='登录成功'
        />
        <footer className="login-footer">
          <p>©拯救小珈团队</p>
        </footer>
      </div>
    )
  }
}

export default LoginPage;