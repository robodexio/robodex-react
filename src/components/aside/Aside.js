import React, { Component } from 'react';
import './Aside.css';
import { withRouter, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class Aside extends Component {
  renderTime() {
    const online = this.props.online ? this.props.online : false;
    const onlineClass = online ? 'green-bg' : 'red-bg';
    const time = '' || this.props.online || dateformat(this.props.time, 'd mmm yyyy HH:MM:ss', true);

    return (
      <div className="Aside-time">
        <div className={`Aside-status ${onlineClass}`}></div>
        <span>{time}</span>
      </div>
    );
  }

  renderFutures() {
    return (
      <div className="Aside-panel">
        <h1>ETH-USD (x100)</h1>
        <ul>
          <li><NavLink to="/" exact className="Aside-link" activeClassName="Aside-selected">
            Perpetual
        <span className="Aside-price">108.75</span>
          </NavLink></li>
          <li><NavLink to="/bingo" className="Aside-link" activeClassName="Aside-selected">
            29 Mar 2019
      <span className="Aside-price">108.75</span>
          </NavLink></li>
          <li><NavLink to="/bongo" className="Aside-link" activeClassName="Aside-selected">
            29 Jun 2019
      <span className="Aside-price">108.75</span>
          </NavLink></li>
        </ul>
      </div>
    );
  }

  renderInfo() {
    return (
      <div className="Aside-panel">
        <ul>
          <li><NavLink to="/index" className="Aside-link" activeClassName="Aside-selected">Index</NavLink></li>
          <li><NavLink to="/fund" className="Aside-link" activeClassName="Aside-selected">Insurance Fund</NavLink></li>
          <li><NavLink to="/kb" className="Aside-link" activeClassName="Aside-selected">Knowledge Base</NavLink></li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="Aside">
        {this.renderTime()}
        <div className="Aside-separator" />
        {this.renderFutures()}
        <div className="Aside-separator" />
        {this.renderInfo()}
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  online: state.online,
  time: state.time,
  instruments: state.instruments
}))(Aside));
