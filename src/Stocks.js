import React, { Component } from 'react';

import './Stocks.css';

const STATES = {
  loading: "loading",
  nodata: "nodata",
  loaded: "loaded",
}

const REFRESH_RATE = 60000 * 5;

const logo = require('./images/stocks_logo.png');

class Stocks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      state: STATES.loading,
      stocks: {}
    };
    this.refreshData = this.refreshData.bind(this);
    this.loadStockInformation = this.loadStockInformation.bind(this);
  }

  componentDidMount() {
    this.refreshInterval = setInterval(this.refreshData, REFRESH_RATE);
    this.refreshData();
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="module-container">
        <div className="title-container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="stock logo"/>
          </div>
          <div className="titles">
            <h1 className="title">Stocks</h1>
            <h3 className="subtitle">Prices and Information</h3>
          </div>
        </div>
        {this.loadStockInformation()}
      </div>
    )
  }

  refreshData() {
    fetch('http://localhost:8080/stocks').then((response) => {
      return response.json();
    }).then((data) => {
      if(!!data) {
        this.setState((prevState, props) => {
          prevState.state = STATES.loaded;
          prevState.stocks = data;
          return prevState;
        })
      }
      else {
        this.setState((prevState, props) => {
          prevState.state = STATES.nodata;
          return prevState;
        })
      }
    });
  }

  loadStockInformation() {
    if(this.state.state === STATES.loaded) {
      console.log(this.state.stocks)
      return (
        <div className="stocks-container">
          <div className="symbol header">Symbol</div>
          <div className="current-price header">Last Price</div>
          <div className="amount-change header">Change</div>
          <div className="percent-change header">Percent</div>
          {Object.keys(this.state.stocks).map((key, index) => {
            var value = this.state.stocks[key];
            var symbolStyle = {
              "grid-row-start": (index + 2).toString()
            }
            var amountChange = parseFloat(value.amountChange);
            var redOrGreen = amountChange > 0 ? "green" : amountChange === 0 ? "black" : "red";
            var redOrGreenStyle = {
              "color": redOrGreen
            }
            console.log(typeof(symbolStyle))
            return (
              [
                <span className="symbol"
                     style={symbolStyle}>
                     {key}
                </span>,
                <span className="current-price">
                  {parseFloat(value.currentPrice)}
                </span>,
                <span className="amount-change"
                      style={redOrGreenStyle}>
                      {amountChange}
                </span>,
                <span className="percent-change"
                      style={redOrGreenStyle}>
                      {parseFloat(value.percentChange)*100}%
                </span>
              ]
            )
          })}
        </div>
      )
    }
    else if(this.state.state === STATES.loading) {
      return <span>Loading...</span>
    }
    else if(this.state.state === STATES.nodata) {
      return <span>Error retrieving stock data.</span>
    }
  }

}

export default Stocks;
