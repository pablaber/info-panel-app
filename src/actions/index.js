export const refreshDarkSky = data => ({
    type: 'REFRESH_DARKSKY',
    data,
});

export const refreshMta = schedule => ({
  type: 'REFRESH_MTA',
  schedule,
});

export const refreshNews = stories => ({
  type: 'REFRESH_NEWS',
  stories,
});

export const refreshNyw = times => ({
  type: 'REFRESH_NYW',
  times,
});

export const refreshSports = scores => ({
  type: 'REFRESH_SPORTS',
  scores,
});

export const refreshStocks = stocks => ({
  type: 'REFRESH_STOCKS',
  stocks,
});

export const setTime = time => ({
  type: 'SET_TIME',
  time,
});
