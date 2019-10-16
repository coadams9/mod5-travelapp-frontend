import React, { Component } from 'react';
import NavBar from './components/NavBar'
import LocationContainer from './containers/LocationContainer'
import FlightsContainer from './containers/FlightsContainer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Hotels from './components/Hotels'
import Trips from './components/Trips'
import LoginContainer from './containers/LoginContainer'
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import './semantic/dist/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/trips' component={Trips} />
          <Route path='/login' component={Login} />
          <Route path='/hotels' component={Hotels} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/home' component={LocationContainer} />
          <Route path='/flights' component={FlightsContainer} />
          <Route path='/' component={LoginContainer} />
        </Switch>
      </div>
    )
  }
}

export default App;
