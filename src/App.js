/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Main from './components/Main';


const App = () => (
  <Router>
    <div>
      <Header></Header>
      <hr/>
      <Main></Main>
    </div>
  </Router>
);
export default App;