import React, { Component } from 'react';
import './App.css';

import moment from 'moment';

// import NywContainer from './NywContainer';
import MtaContainer from './MtaContainer';
import DateTime from './DateTime';
import DarkSky from './DarkSky';
import Sports from './Sports';
import News from './News';
import Stocks from './Stocks';
import Citibike from './Citibike';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(),
    }
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="app-container">
        <div className="darken"></div>
        <div className="content">
          <div className="top">
            <DateTime time={this.state.time}/>
          </div>
          <div className="filler"></div>
          <div className="bottom">
            <div className="modules">
              <div className="modules-left">
                <Stocks />
                <Sports />
              </div>
              <div className="modules-right">
                <Citibike />
                <MtaContainer time={this.state.time}/>
                <News />
              </div>
            </div>
            <div className="weather">
              <DarkSky time={this.state.time}/>
            </div>

          </div>
        </div>

      </div>
    );
  }

  tick() {
    this.setState({
      time: moment()
    })
  }
}

export default App;
