import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { newUser } from '../services/backend'



class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    password_confirm: ''
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event, { value }) => {
    event.preventDefault()
    if (this.state.password === this.state.password_confirm) {
      newUser(this.state.username, this.state.password)
      event.target.reset()
        this.setState({
          username: '',
          password: '',
          password_confirm: ''
        })
      this.props.history.push("/login")
    } else {
      alert('Are you drunk?? Your passwords dont match!!...sigh')
    }
  }


  render(){
    const { username, password, password_confirm } = this.state
    return(
      <div>
        <div id='signupContainer'>
            <div id='signuptitle'>Pack Your Bags</div>
          <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input name='username' placeholder='Enter Username...' value={username}
              onChange={(e) => this.setState({ username: e.target.value })} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name='password' type='password' placeholder='Enter Password...' value={password}
              onChange={(e) => this.setState({ password: e.target.value })} />
          </Form.Field>
          <Form.Field>
            <label>Password Confirmation</label>
            <input type='password' name='password_confirm' value={password_confirm} placeholder='Enter Password....Again..yea...again'
              onChange={(e) => this.setState({ password_confirm: e.target.value })} />
          </Form.Field>
            <Button id='signupButton' color='yellow' type='submit'>Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default SignUp
