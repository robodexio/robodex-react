import React, { Component } from 'react';
import './Account.css';
import { connect } from 'react-redux';
import Setup from './Setup';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'setup'
    };

    this.handleSetup = this.handleSetup.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
  }

  handleSetup() {
    this.setState({
      page: 'setup'
    });
  }

  handleAccount() {
    this.setState({
      page: 'account'
    });
  }
  
  render() {
    let page = null;
    if (this.state.page === 'setup') {
      page = <Setup />;
    }
 
    return (
      <div className="Account">
        <div className="Panel">
          <header>Account</header>
          <main>
            <div className="Account-pager">
              <ul>
                <li className={this.state.page === 'setup' ? 'selected' : null} onClick={this.handleSetup}>Setup</li>
                <li className={this.state.page === 'account' ? 'selected' : null} onClick={this.handleAccount}>Account</li>
              </ul>
            </div>
            {page}
          </main>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
}))(Account);
