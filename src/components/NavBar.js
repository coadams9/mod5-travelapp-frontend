import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='massive'>
        <Link to='/login'>
          <Menu.Item
            name='Login'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        </Link>
        <Link to='/home'>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
        </Link>
        <Link to='/trips'>
          <Menu.Item
            name='Add Car'
            active={activeItem === 'My Trips'}
            onClick={this.handleItemClick}
          >
            My Trips
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}


export default NavBar
