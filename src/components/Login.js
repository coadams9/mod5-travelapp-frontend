import React from 'react'
import { Form, Button } from 'semantic-ui-react'




class Login extends React.Component {


  render(){
    return(
      <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder='Username' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type='password' placeholder='Password' />
      </Form.Field>
      <Button type='submit'>Login</Button>
    </Form>
    )
  }
}

export default Login
