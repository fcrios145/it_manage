import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;