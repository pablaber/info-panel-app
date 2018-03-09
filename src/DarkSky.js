import React, { Component } from 'react';
import './DarkSky.css';

const REFRESH_RATE = 60000 * 10;

const STATES = {
  loading: "loading",
  nodata: "nodata",
  loaded: "loaded",
}

const clearDay = require('./images/weather-icons/clear-day.svg');
const clearNight = require('./images/weather-icons/clear-night.svg');
const cloudy = require('./images/weather-icons/cloudy.svg');
const fog = require('./images/weather-icons/fog.svg');
const partlyCloudyDay = require('./images/weather-icons/partly-cloudy-day.svg');
const partlyCloudyNight = require('./images/weather-icons/partly-cloudy-night.svg');
const rain = require('./images/weather-icons/rain.svg');
const sleet = require('./images/weather-icons/sleet.svg');
const snow = require('./images/weather-icons/snow.svg');
const wind = require('./images/weather-icons/wind.svg');

const arrow = require('./images/arrow.png');
const shades = require('./images/weather-icons/shades.svg');

const iconMap = {
  'clear-day': clearDay,
  'clear-night': clearNight,
  'cloudy': cloudy,
  'fog': fog,
  'partly-cloudy-day': partlyCloudyDay,
  'partly-cloudy-night': partlyCloudyNight,
  'rain': rain,
  'sleet': sleet,
  'snow': snow,
  'wind': wind
}

class DarkSky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: STATES.loading,
      data: {},
    }
    this.refreshData = this.refreshData.bind(this);
    this.currentRow = this.currentRow.bind(this);
  }

  render() {
    return (
      <div className="darksky-container">
        {this.currentRow()}
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

  currentRow() {
    if(this.state.state === STATES.loading) {
      return (
        <span>Loading</span>
      )
    }
    else if(this.state.state === STATES.nodata) {
      return (
        <span>No Data</span>
      )
    }
    else if(this.state.state === STATES.loaded) {
      console.log(this.state.data)
      return (
        <div className="darksky-row">
          <img className="weather-icon"
               src={iconMap[this.state.data.currently.icon]}
               alt="weather icon"/>
          <div className="current-temps-container">
            <div className="current-temps">
              <span className="current-temp">
                {Math.round(this.state.data.currently.temperature)}
              </span>
              <span className="degree">
                &#8457;
              </span>
              <div className="high-low">
                <span className="high">
                  {Math.round(this.state.data.daily.data[0].temperatureHigh)}
                </span>
                <span className="low">
                  {Math.round(this.state.data.daily.data[0].temperatureLow)}
                </span>
              </div>
            </div>
            <span className="temp-description">
              {this.state.data.currently.summary}
            </span>
          </div>
          <div className="wind-speed current-icon">
            <img className="arrow-icon"
                 src={arrow}
                 style={{transform: "rotate(" + (this.state.data.currently.windBearing + 180) + "deg)"}}
                 alt="wind-direction"/>
            <span className="speed">
              {Math.round(this.state.data.currently.windSpeed) + "mph"}
            </span>
          </div>
          <div className="current-icon">
            <img className="weather-icon-sm"
                 src={shades}
                 alt="sunglasses"/>
          </div>
        </div>
      )
    }
  }

  refreshData() {
    fetch('http://localhost:8080/darksky-weather').then((response) => {
      return response.json();
    }).then((data) => {
      if(!!data) {
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
    });
  }
}

export default DarkSky;
