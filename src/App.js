import React, { Component } from 'react';
import './App.css';

import NywContainer from './NywContainer';
import MtaContainer from './MtaContainer';
import DateTime from './DateTime';
import DarkSky from './DarkSky';
import Sports from './Sports';
import News from './News';

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
            <div className="modules">
              <div className="modules-left">
                <Sports />
              </div>
              <div className="modules-right">
                <MtaContainer />
                <NywContainer />
                <News />
              </div>
            </div>
            <div className="weather">
              <DarkSky />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
