import React, { Component } from 'react';
import './Aside.css';
import { NavLink } from "react-router-dom";

class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <div className="Aside-time">
          <div className="Aside-status"></div>
          <span>4 Feb 2019 12:00:40</span>
        </div>
        <div className="Aside-separator" />
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
        <div className="Aside-separator" />
        <div className="Aside-panel">
          <ul>
            <li><NavLink to="/index" className="Aside-link" activeClassName="Aside-selected">Index</NavLink></li>
            <li><NavLink to="/fund" className="Aside-link" activeClassName="Aside-selected">Insurance Fund</NavLink></li>
            <li><NavLink to="/kb" className="Aside-link" activeClassName="Aside-selected">Knowledge Base</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Aside;
