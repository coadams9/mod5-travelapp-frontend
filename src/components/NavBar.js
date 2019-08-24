import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {


  logout = () => {
    localStorage.clear()
  }


  handleItemClick = () => {
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  render() {

    return (
      <Menu size='massive' color='yellow'>
        {localStorage.getItem('token') ? <Link to='/login'>
          <Menu.Item
            name='Login'
            onClick={this.logout}
          >
            Logout
          </Menu.Item>
        </Link> :
          <Link to='/login'><Menu.Item>
            Login
          </Menu.Item></Link>}
        <Link to='/home'><Menu.Item onClick={this.handleItemClick}>Home</Menu.Item></Link>

        <Link to='/trips'><Menu.Item>My Trips</Menu.Item></Link>

        <Menu.Item><iframe width="100" height="30" controls src="https://www.youtube.com/embed/0PRlMoQ3SB8" frameborder="0" allow="accelerometer; autoplay;"></iframe></Menu.Item>
        {localStorage.username ? <Menu.Item position='left'><Header style={{ color: 'gold' }}>WELCOME  {localStorage.username.toUpperCase()}</Header></Menu.Item> : null}
        <Menu.Item position='right'><Header style={{ color: 'gold' }}>Pack Your Bags</Header></Menu.Item>
      </Menu>
    )
  }
}


export default NavBar
