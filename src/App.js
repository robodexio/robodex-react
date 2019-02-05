import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Terminal from './components/terminal/Terminal';
import Index from './components/index/Index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header><Header /></header>
          <aside><Aside /></aside>
          <main>
            <Route exact path="/" component={Terminal} />
            <Route path="/index" component={Index} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
