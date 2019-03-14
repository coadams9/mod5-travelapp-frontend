import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import LocationContainer from './containers/LocationContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LocationContainer />
      </div>
    )
  }
}

export default App;
