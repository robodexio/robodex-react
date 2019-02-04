import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-left">
          <h1>Terebit</h1>
        </div>
        <div className="Header-center">
          <div className="Header-index">Etherium Index: 108.43</div>
        </div>
        <div className="Header-right">
        </div>
      </div>
    );
  }
}

export default Header;
