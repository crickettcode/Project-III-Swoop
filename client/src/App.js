import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import EventPage from './components/EventPage'
import ItineraryPage from './components/ItineraryPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/users" component={UserPage} />
            <Route path="/users/:userId" component={EventPage} />
            <Route path="/users/:userId/" component={ItineraryPage}


          </Switch>
        </div>
      </Router>
        );
      }
    }
    
    export default App;
