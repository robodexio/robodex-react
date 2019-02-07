import React, { Component } from 'react';
import './Setup.css';
import { connect } from 'react-redux';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 'install'
    };
  }

  renderSide() {
    const onClick = (step) => {
      this.setState({
        step
      });
    };

    return (
      <ul>
        <li className={this.state.step === 'install' ? 'selected' : null} onClick={() => onClick('install')}>Install MetaMask</li>
        <li className={this.state.step === 'setup' ? 'selected' : null} onClick={() => onClick('setup')}>Connect Wallet</li>
        <li className={this.state.step === 'wrap' ? 'selected' : null} onClick={() => onClick('wrap')}>Wrap ETH</li>
      </ul>
    );
  }

  renderInstall() {
    return (
      <div>
        <p>Install MetaMask to your browser and setup wallet</p>
        <a href="https://metamask.io/" target="_blank">MetaMask Web Site</a>
      </div>
    );
  }

  renderSetup() {
    const onClick = () => {
      if (window.ethereum) {
        window.ethereum.enable();
      } else {
        alert('Install MetaMask firstly');
      }
    };

    return (
      <div>
        <p>You need to connect your wallet before wrapping ETH or enabling tokens for trading.</p>
        <button onClick={onClick}>Connect MetaMask</button>
      </div>
    );
  }

  render() {
    let step = null;
    if (this.state.step === 'install') {
      step = this.renderInstall();
    } else if (this.state.step === 'setup') {
      step = this.renderSetup();
    }

    return (
      <div className="Setup">
        <aside>{this.renderSide()}</aside>
        <article>{step}</article>
      </div>
    );
  }
}

export default connect(state => ({
}))(Setup);
