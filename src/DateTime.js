import React, { Component } from 'react';
import './DateTime.css';

import moment from 'moment';

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: moment()
    }
    this.updateTime = this.updateTime.bind(this);
  }

  render() {
    return (
      <div className="date-time">
        <div className="date-container">
          <span className="day">
            {this.state.now.format("dddd")}
          </span>
          <span className="date">
            {this.state.now.format("MMMM Do YYYY")}
          </span>
        </div>
        <div className="time-container">
          <span className="time">
            {this.state.now.format("h:mm a")}
          </span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  updateTime() {
    this.setState({
      now: moment(),
    });
  }
}

export default DateTime;
