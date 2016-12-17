import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import XuePage from './components/XuePage';
import ShiPage from './components/ShiPage';
import ZhuPage from './components/ZhuPage';
import MapPage from './components/MapPage';
import QAPage from'./components/QAPage';
import { Router, Route, hashHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="index">
          <Router history={hashHistory}>
            <Route path="/home" component={HomePage}/>
            <Route path="/" component={LoginPage}/>
            <Route path="/map" component={MapPage}/>
            <Route path="/qa" component={QAPage}/>
            <Route path="/shi" component={ShiPage}/>
            <Route path="/xue" component={XuePage}/>
            <Route path="/zhu" component={ZhuPage}/>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
