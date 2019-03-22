import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'





class LoginContainer extends React.Component {

  render(){
    return(
      <div id='loginContainer'>
        <Link to='/login'><Button id='loginButt'>Login</Button></Link>
        <Link to='/signUp'><Button id='signupButt'>SignUp</Button></Link>
      </div>
    )
  }
}

export default LoginContainer
