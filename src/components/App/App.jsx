import React, { Component } from 'react';
import logo from '../../dog-logo.svg';
import '../App/App.css';
import LoginIpunt from '../LoginInput/LoginInput';

class App extends Component {
  render() {
    return (
      <div className="app">
          <LoginIpunt />
      </div>
    );
  }
}

export default App;
