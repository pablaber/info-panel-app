import React, { Component } from 'react';
import './App.css';

import NywContainer from './NywContainer';
import MtaContainer from './MtaContainer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NywContainer />
        <MtaContainer />
      </div>
    );
  }
}

export default App;
