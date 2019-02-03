import React, { Component } from 'react';
import './App.css';
import Terminal from './components/terminal/Terminal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="App-title">
            Terebit
          </div>
          <div>
            ETH Index: 3402.01
          </div>
        </header>
        <aside></aside>
        <main><Terminal /></main>
      </div>
    );
  }
}

export default App;
