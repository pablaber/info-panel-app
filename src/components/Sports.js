import React, { Component } from 'react';

import moment from 'moment';

import './styles/Sports.css'

const logo = require('../images/sports_logo.png')

const logos = {
  mlb: {
    ana: require('../images/sports-logos/mlb/ana.png'),
    ari: require('../images/sports-logos/mlb/ari.png'),
    atl: require('../images/sports-logos/mlb/atl.png'),
    bal: require('../images/sports-logos/mlb/bal.png'),
    bos: require('../images/sports-logos/mlb/bos.png'),
    chc: require('../images/sports-logos/mlb/chc.png'),
    chw: require('../images/sports-logos/mlb/chw.png'),
    cin: require('../images/sports-logos/mlb/cin.png'),
    cle: require('../images/sports-logos/mlb/cle.png'),
    col: require('../images/sports-logos/mlb/col.png'),
    det: require('../images/sports-logos/mlb/det.png'),
    hou: require('../images/sports-logos/mlb/hou.png'),
    kcr: require('../images/sports-logos/mlb/kcr.png'),
    lad: require('../images/sports-logos/mlb/lad.png'),
    mia: require('../images/sports-logos/mlb/mia.png'),
    mil: require('../images/sports-logos/mlb/mil.png'),
    min: require('../images/sports-logos/mlb/min.png'),
    nym: require('../images/sports-logos/mlb/nym.png'),
    nyy: require('../images/sports-logos/mlb/nyy.png'),
    oak: require('../images/sports-logos/mlb/oak.png'),
    phi: require('../images/sports-logos/mlb/phi.png'),
    pit: require('../images/sports-logos/mlb/pit.png'),
    sdp: require('../images/sports-logos/mlb/sdp.png'),
    sea: require('../images/sports-logos/mlb/sea.png'),
    sfg: require('../images/sports-logos/mlb/sfg.png'),
    stl: require('../images/sports-logos/mlb/stl.png'),
    tb: require('../images/sports-logos/mlb/tbd.png'),
    tex: require('../images/sports-logos/mlb/tex.png'),
    tor: require('../images/sports-logos/mlb/tor.png'),
    wsh: require('../images/sports-logos/mlb/wsh.png'),
  },
  nba: {
    atl: require('../images/sports-logos/nba/atl.png'),
    bkn: require('../images/sports-logos/nba/bkn.png'),
    bos: require('../images/sports-logos/nba/bos.png'),
    cha: require('../images/sports-logos/nba/cha.png'),
    chi: require('../images/sports-logos/nba/chi.png'),
    cle: require('../images/sports-logos/nba/cle.svg'),
    dal: require('../images/sports-logos/nba/dal.svg'),
    den: require('../images/sports-logos/nba/den.png'),
    det: require('../images/sports-logos/nba/det.png'),
    gsw: require('../images/sports-logos/nba/gsw.png'),
    hou: require('../images/sports-logos/nba/hou.png'),
    ind: require('../images/sports-logos/nba/ind.png'),
    lac: require('../images/sports-logos/nba/lac.png'),
    lal: require('../images/sports-logos/nba/lal.png'),
    mem: require('../images/sports-logos/nba/mem.png'),
    mia: require('../images/sports-logos/nba/mia.png'),
    mil: require('../images/sports-logos/nba/mil.png'),
    min: require('../images/sports-logos/nba/min.png'),
    nop: require('../images/sports-logos/nba/nop.png'),
    nyk: require('../images/sports-logos/nba/nyk.png'),
    okc: require('../images/sports-logos/nba/okc.png'),
    orl: require('../images/sports-logos/nba/orl.png'),
    phi: require('../images/sports-logos/nba/phi.png'),
    phx: require('../images/sports-logos/nba/phx.png'),
    por: require('../images/sports-logos/nba/por.png'),
    sac: require('../images/sports-logos/nba/sac.png'),
    sas: require('../images/sports-logos/nba/sas.png'),
    tor: require('../images/sports-logos/nba/tor.png'),
    uta: require('../images/sports-logos/nba/uta.png'),
    was: require('../images/sports-logos/nba/was.png'),
  },
  nfl: {
    ari: require('../images/sports-logos/nfl/ari.png'),
    atl: require('../images/sports-logos/nfl/atl.png'),
    bal: require('../images/sports-logos/nfl/bal.png'),
    buf: require('../images/sports-logos/nfl/buf.png'),
    car: require('../images/sports-logos/nfl/car.png'),
    chi: require('../images/sports-logos/nfl/chi.png'),
    cin: require('../images/sports-logos/nfl/cin.png'),
    cle: require('../images/sports-logos/nfl/cle.png'),
    dal: require('../images/sports-logos/nfl/dal.png'),
    den: require('../images/sports-logos/nfl/den.png'),
    det: require('../images/sports-logos/nfl/det.png'),
    gb: require('../images/sports-logos/nfl/gb.png'),
    hou: require('../images/sports-logos/nfl/hou.png'),
    ind: require('../images/sports-logos/nfl/ind.png'),
    jax: require('../images/sports-logos/nfl/jax.png'),
    kc: require('../images/sports-logos/nfl/kc.png'),
    lac: require('../images/sports-logos/nfl/lac.png'),
    lar: require('../images/sports-logos/nfl/lar.png'),
    mia: require('../images/sports-logos/nfl/mia.png'),
    min: require('../images/sports-logos/nfl/min.png'),
    ne: require('../images/sports-logos/nfl/ne.png'),
    no: require('../images/sports-logos/nfl/no.png'),
    nyg: require('../images/sports-logos/nfl/nyg.png'),
    nyj: require('../images/sports-logos/nfl/nyj.png'),
    oak: require('../images/sports-logos/nfl/oak.png'),
    phi: require('../images/sports-logos/nfl/phi.png'),
    pit: require('../images/sports-logos/nfl/pit.png'),
    sea: require('../images/sports-logos/nfl/sea.png'),
    sf: require('../images/sports-logos/nfl/sf.png'),
    tb: require('../images/sports-logos/nfl/tb.png'),
    ten: require('../images/sports-logos/nfl/ten.png'),
    wsh: require('../images/sports-logos/nfl/wsh.png'),
  },
  nhl: {
    ana: require('../images/sports-logos/nhl/ana.svg'),
    ari: require('../images/sports-logos/nhl/ari.svg'),
    bos: require('../images/sports-logos/nhl/bos.svg'),
    buf: require('../images/sports-logos/nhl/buf.svg'),
    car: require('../images/sports-logos/nhl/car.svg'),
    cbj: require('../images/sports-logos/nhl/cbj.svg'),
    cgy: require('../images/sports-logos/nhl/cgy.svg'),
    chi: require('../images/sports-logos/nhl/chi.svg'),
    col: require('../images/sports-logos/nhl/col.svg'),
    dal: require('../images/sports-logos/nhl/dal.svg'),
    det: require('../images/sports-logos/nhl/det.svg'),
    edm: require('../images/sports-logos/nhl/edm.svg'),
    flo: require('../images/sports-logos/nhl/fla.svg'),
    lak: require('../images/sports-logos/nhl/lak.svg'),
    min: require('../images/sports-logos/nhl/min.svg'),
    mtl: require('../images/sports-logos/nhl/mtl.svg'),
    njd: require('../images/sports-logos/nhl/njd.svg'),
    nsh: require('../images/sports-logos/nhl/nsh.svg'),
    nyi: require('../images/sports-logos/nhl/nyi.svg'),
    nyr: require('../images/sports-logos/nhl/nyr.svg'),
    ott: require('../images/sports-logos/nhl/ott.svg'),
    phi: require('../images/sports-logos/nhl/phi.svg'),
    pit: require('../images/sports-logos/nhl/pit.svg'),
    sjs: require('../images/sports-logos/nhl/sjs.svg'),
    stl: require('../images/sports-logos/nhl/stl.svg'),
    tbl: require('../images/sports-logos/nhl/tbl.svg'),
    tor: require('../images/sports-logos/nhl/tor.svg'),
    van: require('../images/sports-logos/nhl/van.svg'),
    vgk: require('../images/sports-logos/nhl/vgk.svg'),
    wpg: require('../images/sports-logos/nhl/wpg.svg'),
    wsh: require('../images/sports-logos/nhl/wsh.svg'),
  }
}

const STATES = {
  loading: "loading",
  nodata: "nodata",
  loaded: "loaded",
}

const REFRESH_RATE = 60000 * 60;

class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: STATES.loading,
      scores: {}
    };
    this.refreshData = this.refreshData.bind(this);
    this.loadYesterdaysScores = this.loadYesterdaysScores.bind(this);
    this.loadUpcomingSchedule = this.loadUpcomingSchedule.bind(this);
  }

  render() {
    return (
      <div className="module-container">
        <div className="title-container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="sports logo" />
          </div>
          <div className="titles">
            <h1 className="title">Sports</h1>
            <h3 className="subtitle">Scores and Schedules</h3>
          </div>
        </div>
        <div className="scores-container">
          <span className="scores-title">Yesterday's Scores</span>
          {this.loadYesterdaysScores()}
          <span className="scores-title">Upcoming Games</span>
          {this.loadUpcomingSchedule()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.refreshInterval = setInterval(this.refreshData, REFRESH_RATE);
    this.refreshData();
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  refreshData() {
    fetch('http://localhost:8080/scores').then((response) => {
      return response.json();
    }).then((data) => {
      if(!!data) {
        this.setState((prevState, props) => {
          prevState.state = STATES.loaded;
          prevState.scores = data;
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

  loadYesterdaysScores() {
    if(this.state.state === STATES.loaded) {
      var yesterdaysScores = this.state.scores.yesterday;
      if(yesterdaysScores.length === 0) {
        return <span className="no-scores">No results from yesterday.</span>
      }
      else {
        return (
          <div className="yesterdays-scores">
            {yesterdaysScores.map((value, index) => {
              return (
                <div className="score-box" key={index}>
                  <div className="away-team">
                    <div className="score-logo-container">
                      <img className="score-logo"
                           src={logos[value.league][value.awayTeam.Abbreviation.toLowerCase()]}
                           alt="team logo" />
                    </div>
                    <span className="team-name">
                      {value.awayTeam.City}
                    </span>
                    <div className="filler"></div>
                    <span className="score">
                      {value.awayScore}
                    </span>
                  </div>
                  <div className="home-team">
                    <div className="score-logo-container">
                      <img className="score-logo"
                           src={logos[value.league][value.homeTeam.Abbreviation.toLowerCase()]}
                           alt="team logo" />
                    </div>
                    <span className="team-name">
                      {value.homeTeam.City}
                    </span>
                    <div className="filler"></div>
                    <span className="score">
                      {value.homeScore}
                    </span>
                  </div>

                </div>
              )
            })}
          </div>
        )
      }
    }
    else {
      return <span>Loading...</span>
    }
  }

  loadUpcomingSchedule() {
    if(this.state.state === STATES.loaded) {
      var upcomingSchedule = this.state.scores.future;
      return (
        <div className="future-games">
          {upcomingSchedule.map((value, index) => {
            var gameTime = moment(value.date, "YYYY-MM-DD h:mmA");
            return (
              <div className="score-box" key={index}>
                <div className="away-team">
                  <div className="score-logo-container">
                    <img className="score-logo"
                         src={logos[value.league][value.awayTeam.Abbreviation.toLowerCase()]}
                         alt="team logo" />
                  </div>
                  <span className="team-name">
                    {value.awayTeam.City}
                  </span>
                  <div className="filler"></div>
                  <span className="game-day">
                    {gameTime.format("dddd, MMMM Do")}
                  </span>
                </div>
                <div className="home-team">
                  <div className="score-logo-container">
                    <img className="score-logo"
                         src={logos[value.league][value.homeTeam.Abbreviation.toLowerCase()]}
                         alt="team logo" />
                  </div>
                  <span className="team-name">
                    {value.homeTeam.City}
                  </span>
                  <div className="filler"></div>
                  <span className="game-time">
                    {gameTime.format("h:mm A")}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
    else {
      return <span>Loading...</span>
    }
  }
}

export default Sports;
