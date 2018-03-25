import React, { Component } from 'react';
import './DateTime.css';

class DateTime extends Component {
  render() {
    return (
      <div className="date-time">
        <div className="date-container">
          <span className="day">
            {this.props.time.format("dddd")}
          </span>
          <span className="date">
            {this.props.time.format("MMMM Do YYYY")}
          </span>
        </div>
        <div className="time-container">
          <span className="time">
            {this.props.time.format("h:mm a")}
          </span>
        </div>
      </div>
    )
  }
}

export default DateTime;
