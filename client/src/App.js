import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import EventPage from './components/EventPage'
import ItineraryPage from './components/ItineraryPage'
import injectTapEventPlugin from 'react-tap-event-plugin'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/users/:userId/events" component={EventPage} />
            <Route exact path="/users/:userId/events/:eventId/itinerary" component={ItineraryPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
