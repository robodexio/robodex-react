import React, { Component } from 'react';
import './Aside.css';
import { withRouter, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import dateformat from 'dateformat';

function Link(props) {
  return <NavLink {...props} className="Aside-link" activeClassName="Aside-selected" />;
}

class Aside extends Component {
  renderTime() {
    const onlineClass = this.props.online ? 'green-bg' : 'red-bg';
    const time = '' || (this.props.time && dateformat(this.props.time, 'd mmm yyyy HH:MM:ss', true));

    return (
      <div className="Aside-time">
        <div className={`Aside-status ${onlineClass}`}></div>
        <span>{time}</span>
      </div>
    );
  }

  renderFutures() {
    const price = this.props.orderbook ? this.props.orderbook.mark.toFixed(2) : '';
    return (
      <div className="Aside-panel">
        <h1>ETH-USD (x100)</h1>
        <ul>
          <li><Link to="/" exact>Perpetual <span className="Aside-price">{price}</span></Link></li>
        </ul>
      </div>
    );
  }

  renderInfo() {
    return (
      <div className="Aside-panel">
        <ul>
          <li><Link to="/index">Index</Link></li>
          <li><Link to="/fund">Insurance Fund</Link></li>
          <li><Link to="/kb">Knowledge Base</Link></li>
          <li><Link to="/about">About</Link></li>
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
  instruments: state.instruments,
  orderbook: state.orderbook
}))(Aside));
