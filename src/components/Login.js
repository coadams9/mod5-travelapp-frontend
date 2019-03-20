import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { getAuthToken } from '../services/backend'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (event, { value }) => {
    event.preventDefault()
    getAuthToken(this.state).then(payload => {
    localStorage.setItem('token', payload.token)
    localStorage.setItem('username', payload.user)
      if (localStorage.getItem('token') && localStorage.getItem('username') !== 'undefined'){
        this.props.history.push("/home")
      } else {
        alert('Nah')
      }
    })
    this.setState({ username: '', password: ''})
  }


  render(){
    const { username, password } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input name='username' placeholder='Username' value={username}
            onChange={(e) => this.setState({ username: e.target.value })} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' name='password' placeholder='password' value={password}
            onChange={(e) => this.setState({ password: e.target.value })} />
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
    )
  }
}

const LoginWithRouter = withRouter(Login)
export default LoginWithRouter
