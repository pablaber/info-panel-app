import { combineReducers } from 'redux'

const darkSky = (state = {}, action) => {
  switch(action.type) {
    case 'REFRESH_DARKSKY':
      return action.data;
    default:
      return state;
  }
}

const mta = (state = {}, action) => {
  switch(action.type) {
    case 'REFRESH_MTA':
      return action.schedule;
    default:
      return state;
  }
}

const news = (state = [], action) => {
  switch(action.type) {
    case 'REFRESH_NEWS':
      return action.stories;
    default:
      return state;
  }
}

const nyw = (state = [], action) => {
  switch(action.type) {
    case 'REFRESH_NYW':
      return action.times;
    default:
      return state;
  }
}

const sports = (state = {}, action) => {
  switch(action.type) {
    case 'REFRESH_SPORTS':
      return action.scores;
    default:
      return state;
  }
}

const stocks = (state = {}, action) => {
  switch(action.type) {
    case 'REFRESH_STOCKS':
      return action.stocks;
    default:
      return state;
  }
}

const time = (state = 0, action) => {
  switch(action.type) {
    case 'SET_TIME':
      return action.time;
    default:
      return state;
  }
}

export default combineReducers({
  darkSky,
  mta,
  news,
  nyw,
  sports,
  stocks,
  time
})
