import React, { Component } from 'react';

class NywContainer extends Component {
  render() {
    return <h1>HEllo world</h1>;
  }

  componentDidMount() {
    fetch("http://localhost:8080/nyw-bus-times").then((response) => {
      return response.json();
    }).then(data => {
      console.log(data);
    });
  }
}

export default NywContainer;
