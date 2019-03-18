import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'





class LoginContainer extends React.Component {

  render(){
    return(
      <div>
        <Link to='/login'><Button>Login</Button></Link>
        <Link to='/signUp'><Button>SignUp</Button></Link>
      </div>
    )
  }
}

export default LoginContainer
