import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={UserPage} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
