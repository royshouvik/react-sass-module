import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div styleName="App">
        <header styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <h1 styleName="App-title">Welcome to React</h1>
        </header>
        <p styleName="App-intro" className="global">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
