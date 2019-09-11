import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'





class LoginContainer extends React.Component {

  render() {
    return (
      <div id='loginContainer'>
        <h1>Welcome to Pack Your Bags</h1>
        <h2>Please <a href='/login'>Login</a> or <a href='/signup'>Sign Up</a></h2>
      </div>
    )
  }
}

export default LoginContainer
