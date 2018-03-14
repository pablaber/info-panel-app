import React, { Component } from 'react';
import './NywContainer.css'

const logo = require('./images/nyw_logo.png');

const STATES = {
  loading: "loading",
  nodata: "nodata",
  loaded: "loaded",
  offpeak: "offpeak",
}
const REFRESH_RATE = 60000;

class NywContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: STATES.loading,
      times: [],
    }
    this.refreshData = this.refreshData.bind(this);
  }

  render() {
    return (
      <div className="module-container">
        <div className="title-container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="new york waterway logo"/>
          </div>
          <div className="titles">
            <h1 className="title">New York Waterway</h1>
            <h3 className="subtitle">Bus Schedule</h3>
          </div>
        </div>
        <div className="nyw-times">
          {this.showTimes()}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.refreshInterval = setInterval(this.refreshData, REFRESH_RATE);
    this.refreshData();
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  refreshData() {
    fetch("http://localhost:8080/nyw-bus-times").then((response) => {
      return response.json();
    }).then(data => {
      if(data.failed && data.error === "OFF_PEAK") {
        this.setState((prevState, props) => {
          prevState.state = STATES.offpeak;
          return prevState;
        });
      }
      else if(data.length === 0 || data.failed) {
        this.setState((prevState, props) => {
          prevState.state = STATES.nodata;
          return prevState;
        });
      }
      else {
        this.setState((prevState, props) => {
          prevState.state = STATES.loaded;
          prevState.times = data;
          return prevState;
        });
      }
    });
  }

  showTimes() {
    if(this.state.state === STATES.loading) {
      return (
        <div className="loader">Loading...</div>
      )
    }
    else if(this.state.state === STATES.nodata) {
      return (
        <div className="nyw-row">
          <span>No busses arriving soon.</span>
        </div>
      )
    }
    else if(this.state.state === STATES.offpeak) {
      return (
        <div className="nyr-row">
          <span>Off peak, no busses arriving soon.</span>
        </div>
      )
    }
    else if(this.state.state === STATES.loaded) {
      return this.state.times.map((value, index) => {
        var minutes = Math.floor(value / 60);
        return (
          <div className="nyw-row" key={index}>
            <span className="nyw-destination">Midtown / W 39th St</span>
            <span className="nyw-time">{minutes} minutes</span>
          </div>
        )
      });

    }
    else {
      return (
        <h3>Error loading bus data.</h3>
      )
    }
  }
}

export default NywContainer;
