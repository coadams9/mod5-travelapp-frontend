import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {


  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  }

  render() {

    return (
      <Menu size='massive'>
        {localStorage.getItem('token') ? <Link to='/login'>
          <Menu.Item
            name='Login'
            onClick={this.logout}
          >
            Logout
          </Menu.Item>
        </Link> :
        <Link to='/login'>
          <Menu.Item
            name='Login'
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        </Link>}
        <Link to='/home'>
          <Menu.Item
            name='Home'
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
        </Link>
        <Link to='/trips'>
          <Menu.Item
            name='Add Car'
            onClick={this.handleItemClick}
          >
            My Trips
          </Menu.Item>
        </Link>
        <Menu.Item position='right'><Header style={{ color: 'lightBlue'}}>Pack Your Bags</Header></Menu.Item>
      </Menu>
    )
  }
}


export default NavBar
