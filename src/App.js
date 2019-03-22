import React, { Component } from 'react';
import NavBar from './components/NavBar'
import LocationContainer from './containers/LocationContainer'
import FlightsContainer from './containers/FlightsContainer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Hotels from './components/Hotels'
import Trips from './components/Trips'
import LoginContainer from './containers/LoginContainer'
import './App.css';
import { Switch, Route } from 'react-router-dom'
// import './semantic/dist/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/trips' component={Trips} />
            <Route exact path='/hotels' component={Hotels} />
            <Route exact path='/signUp' component={SignUp} />
            <Route exact path='/home' component={LocationContainer} />
            <Route exact path='/flights' component={FlightsContainer} />
            <Route exact path='/' component={LoginContainer} />
          </Switch>
      </div>
    )
  }
}

export default App;
