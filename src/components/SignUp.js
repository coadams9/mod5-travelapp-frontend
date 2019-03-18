import React from 'react'
import { Form, Button } from 'semantic-ui-react'



class SignUp extends React.Component {

  // constructor(props) {
  //       super(props)
  //
  //       this.state = {
  //           name: '',
  //           password: '',
  //           newName: '',
  //           newPassword: ''
  //       }
  //   }
  //
  //   handleChange = event => {
  //       this.setState({
  //           [event.target.name]: event.target.value
  //       })
  //   }
  //
  //   handleSubmit = event => {
  //       event.preventDefault();
  //       addNewUser(this.state.newName, this.state.newPassword)
  //       event.target.reset()
  //       this.props.clickLogin()
  //       this.setState({
  //           newName: '',
  //           newPassword: ''
  //       })
  //   }
  //
  //   handleLogin = event => {
  //       event.preventDefault();
  //       getAuthToken({ name: this.state.name, password: this.state.password })
  //           .then(payload => {
  //               if (payload.user) {
  //                   localStorage.setItem("token", payload.jwt)
  //
  //                   getUserInfo(payload.user.id).then((data) => this.props.setUserInfo(data))
  //                   this.props.changeLogin()
  //           } else {
  //               alert("INVALID LOGIN!")
  //           }
  //       })
  //   }

  render(){
    return(
    <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Enter Username...' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Enter Password...' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Enter Password...' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    </Form>
    )
  }
}

export default SignUp
