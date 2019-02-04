import React, { Component } from 'react';
import './Aside.css';

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
            <li><a>Perpetual</a></li>
            <li><a>29 Mar 2019</a></li>
            <li><a>29 Jun 2019</a></li>
          </ul>
        </div>
        <div className="Aside-separator" />
        <div className="Aside-panel">
          <ul>
            <li><a>Index</a></li>
            <li><a>Insurance Fund</a></li>
            <li><a>Knowledge Base</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Aside;
