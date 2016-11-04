import React, { Component } from 'react';
import '../styles/app.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
        <div>
            <Header></Header>
            <div className="main-content">
                {React.cloneElement(this.props.children, this.props)}
            </div>
        </div>
    );
  }
}

export default App;
