import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HomePage/>
      </MuiThemeProvider>
    );
  }
}

export default App;
