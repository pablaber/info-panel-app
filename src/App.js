import React, { Component } from 'react';
import './App.css';

import NywContainer from './NywContainer';
import MtaContainer from './MtaContainer';
import DateTime from './DateTime';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="darken"></div>
        <div className="content">
          <div className="top">
            <DateTime />
          </div>
          <div className="filler"></div>
          <div className="bottom">
            <NywContainer />
            <MtaContainer />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
