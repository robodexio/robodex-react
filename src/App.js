import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Terminal from './components/terminal/Terminal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><Header /></header>
        <aside><Aside /></aside>
        <main>
          <Terminal />
        </main>
      </div>
    );
  }
}

export default App;
