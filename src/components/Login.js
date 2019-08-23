import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { getAuthToken } from '../services/backend'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (event, { value }) => {
    event.preventDefault()
    getAuthToken(this.state).then(payload => {
      debugger
      if (payload.error) {
        alert('Somethng went wrong. Please try again!')
      } else {
        localStorage.setItem('token', payload.token)
        localStorage.setItem('username', payload.user)
        localStorage.setItem('userId', payload.userId)
        this.props.history.push("/home")
      }
    })
  }


  render() {
    const { username, password } = this.state
    return (
      <div id='form-container'>
        <div id='titleContainer'>
          <div id='title'>Pack Your Bags</div>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label id='labels'>Username</label>
            <input name='username' id='inputtext' style={{ textAlign: 'center' }} placeholder='Username' value={username}
              onChange={(e) => this.setState({ username: e.target.value })} />
          </Form.Field>
          <Form.Field>
            <label id='labels'>Password</label>
            <input type='password' id='inputtext' style={{ textAlign: 'center' }} name='password' placeholder='password' value={password}
              onChange={(e) => this.setState({ password: e.target.value })} />
          </Form.Field>
          <div>
            <Button color='yellow' type='submit'>Login</Button>
            <Button color='yellow' as={Link} to='/signUp'>SignUp</Button>
          </div>
        </Form>
      </div>
    )
  }
}

const LoginWithRouter = withRouter(Login)
export default LoginWithRouter
