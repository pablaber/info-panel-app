import React, { Component } from 'react';
import moment from 'moment';

import './MtaContainer.css';

const logo = require('./images/mta_logo.png');
const sixLogo = require('./images/6_logo.png');
const fourLogo = require('./images/4_logo.png');
const unknownLogo = require('./images/unknown_logo.png');

const STATES = {
  loading: "loading",
  nodata: "nodata",
  loaded: "loaded",
}

const REFRESH_RATE = 60000 * 5;

class MtaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: STATES.loading,
      schedule: {},
    }
    this.refreshData = this.refreshData.bind(this);
    this.subwayLogoFor = this.subwayLogoFor.bind(this);
  }

  render() {
    return (
      <div className="module-container">
        <div className="title-container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="mta logo" />
          </div>
          <div className="titles">
            <h1 className="title">MTA</h1>
            <h3 className="subtitle">Subway Schedule</h3>
          </div>
        </div>
        <div className="mta-station-name">
          33rd Street
        </div>
        <div className="mta-station-times">
          {this.showTimes()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.refreshInterval = setInterval(this.refreshData, REFRESH_RATE);
    this.refreshData();
  };

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  };

  refreshData() {
    fetch(process.env.REACT_APP_API_URL + '/mta-subway-times').then((response) => {
      return response.json();
    }).then((data) => {
      if(!!data) {
        this.setState((prevState, props) => {
          prevState.state = STATES.loaded;
          prevState.schedule = data;
          return prevState;
        });
      }
      else {
        this.setState((prevState, props) => {
          prevState.state = STATES.nodata;
          return prevState;
        })
      }
    });
  }

  showTimes() {
    if(this.state.state === STATES.loaded) {
      var northbound, southbound;
      if(!!this.state.schedule["N"]) {
        northbound = this.state.schedule["N"].map((val, index) => {
          var eta = moment(val.arrivalTime * 1000);
          return {
            eta: eta,
            routeId: val.routeId
          }
        }).filter((val, index) => {
          return val.eta.isAfter(this.props.time);
        }).map((val, index) => {
          var totalSeconds = val.eta.diff(this.props.time, "seconds");
          var minutes = Math.floor(totalSeconds / 60);
          var seconds = totalSeconds % 60;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          var timeStr = minutes + ":" + seconds;
          return (
            <div className="mta-row" key={"N" + index}>
              <div className="subway-logo-container">
                <img className="subway-logo" src={this.subwayLogoFor(val.routeId)} alt="six train logo" />
              </div>
              <label className="subway-direction">Uptown</label>
              <label className="subway-time">{timeStr}</label>
            </div>
          )
        });
        northbound.splice(3);
      } else {
        northbound = [];
      }

      if(!!this.state.schedule["S"]) {
        southbound = this.state.schedule["S"].map((val, index) => {
          var eta = moment(val.arrivalTime * 1000);
          return eta;
        }).filter((val, index) => {
          return val.isAfter(this.props.time);
        }).map((val, index) => {
            var totalSeconds = val.diff(this.props.time, "seconds");
            var minutes = Math.floor(totalSeconds / 60);
            var seconds = totalSeconds % 60;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            var timeStr = minutes + ":" + seconds;
            return (
            <div className="mta-row" key={"S" + index}>
              <div className="subway-logo-container">
                <img className="subway-logo" src={sixLogo} alt="six train logo" />
              </div>
              <label className="subway-direction">Downtown</label>
              <label className="subway-time">{timeStr}</label>
            </div>
          )
        });
        southbound.splice(3);
      }


      var splitter = [<div className="splitter" key="splitter"></div>]

      return northbound.concat(splitter).concat(southbound);
    }
    else if(this.state.state === STATES.loading) {
      return <span>Loading</span>
    }
    else {
      return <span>Error getting MTA data</span>
    }
  }

  subwayLogoFor(routeId) {
    switch(routeId) {
      case "4":
        return fourLogo;
      case "6":
      case "6X":
        return sixLogo;
      default:
        return unknownLogo;
    }
  }
};

export default MtaContainer;
