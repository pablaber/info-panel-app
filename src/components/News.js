import React, { Component } from 'react';
import './styles/News.css'

const logo = require('../images/news_logo.png')

const REFRESH_RATE = 60000 * 60;

class News extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
    this.loadNews = this.loadNews.bind(this);
  }

  render() {
    return (
      <div className="module-container">
        <div className="title-container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="new york waterway logo"/>
          </div>
          <div className="titles">
            <h1 className="title">News</h1>
            <h3 className="subtitle">Headlines from Around the US</h3>
          </div>
        </div>
        {this.loadNews()}
      </div>
    )
  }

  loadNews() {
    if(!this.props.articles || this.props.articles.length === 0) {
      return <span>Loading...</span>
    }
    else {
      return (
        <div className="news-container">
          {this.props.articles.map((value, index) => {
            return (
              <div className="article" key={index}>
                <div className="thumbnail-container">
                  <img className="thumbnail"
                       src={value.urlToImage}
                       alt="news thumbnail" />
                </div>
                <div className="article-info">
                  <span className="article-title">
                    {value.title}
                  </span>
                  <span className="article-source">
                    {value.source.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  componentDidMount() {
    this.refreshInterval = setInterval(this.refreshData, REFRESH_RATE);
    this.refreshData();
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  refreshData() {
    fetch("http://localhost:8080/news").then((response) => {
      return response.json();
    }).then(data => {
      if(data.length === 0) {
        if(!this.props.articles) {
          this.props.refresh([]);
        }
      }
      else {
        this.props.refresh(data);
      }
    });
  }
}

export default News;
