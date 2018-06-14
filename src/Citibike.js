import React, { Component } from 'react';

import './Citibike.css';

const logo = require('./images/citibike_logo.svg');
const sprites = require('./images/citibike_sprites.png');

const STATES = {
  loading: "loading",
  nodata: "nodata",
  loaded: "loaded",
}

const REFRESH_RATE = 60000 * 5;

class Citibike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: STATES.loading,
      data: {},
    }
    this.refreshData = this.refreshData.bind(this);
    this.classForStation = this.classForStation.bind(this);
  }

  render() {
    return (
      <div className="module-container">
        <div className="title-container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="citibike logo" />
          </div>
        </div>
        <div className="citibike-data-container">
          {this.showStationStatus()}
        </div>
      </div>
    )
  };

  componentDidMount() {
    this.refreshInterval = setInterval(this.refreshData, REFRESH_RATE);
    this.refreshData();
  };

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  };

  refreshData() {
    fetch(process.env.REACT_APP_API_URL + '/citibike').then((response) => {
      return response.json()
    }).then((data) => {
      if (!!data) {
        this.setState((prevState, props) => {
          prevState.state = STATES.loaded;
          prevState.data = data;
          return prevState;
        });
      }
      else {
        this.setState((prevState, props) => {
          prevState.state = STATES.nodata;
          return prevState;
        })
      }
    })
  }

  showStationStatus() {
    if (this.state.state === STATES.loaded) {
      return this.state.data.map((value) => {
        return (
          <div className="citibike-row" key={"station-" + value.id}>
            <div className="station-logo-container">
              <img className={"station-logo " + this.classForStation(value)} src={sprites} alt="station sprite" />
            </div>
            <label className="station-name">{value.name}</label>
            <div className="station-bike-info-container">
              <label className="bikes-available">{value.bikesAvailable + " bikes"}</label>
              <label className="docks-available">{value.docksAvailable + " docks"}</label>
            </div>
          </div>
        )
      })
    }
  }

  classForStation(value) {
    let totalBikes = value.bikesAvailable + value.docksAvailable;
    if(value.isActive !== 1) {
      return "inactive";
    }
    else if(value.bikesAvailable === 0) {
      return "empty";
    }
    else if(value.bikesAvailable <= 4) {
      return "low";
    }
    else if(value.bikesAvailable <= (2/3) * totalBikes) {
      return "half";
    }
    else if(value.bikesAvailable < totalBikes) {
      return "most";
    }
    else if(value.bikesAvailable === totalBikes) {
      return "full";
    }
    else {
      return "";
    }
  }
}

export default Citibike;

