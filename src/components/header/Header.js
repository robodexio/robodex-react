import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <div className="App-title">
            Terebit
          </div>
          <div>
            ETH Index: 3402.01
          </div>
      </div>
    );
  }
}

export default Header;
