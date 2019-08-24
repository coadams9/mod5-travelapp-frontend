import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { hotelPics } from '../actions/index'

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
}


class HotelCard extends React.Component {



  render() {
    const { htl, hotelToStore } = this.props

    return (
      <Card>
        <Image src={hotelPics.sample()} />
        <Card.Content>
          <Card.Header>{htl.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>Price: {htl.price}</Card.Description>
          <Card.Description>Address: {htl.displayaddress}</Card.Description>
          <Card.Description>Phone Number: {htl.phone}</Card.Description>
          <Card.Description>User Rating: {htl.userrating}</Card.Description>
          <Card.Description>Brand: {htl.brand}</Card.Description>
          <a href={"https://www.kayak.com/" + htl.shareURL}>More Info</a>
        </Card.Content>
        <Card.Content extra>
          <Icon name='star'>{htl.stars} Stars</Icon>
          <div className='ui two buttons'>
            <Button as={Link} to='/trips' basic color='yellow' onClick={() => hotelToStore(htl)}>Book Hotel</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hotelToStore: (htl) => dispatch({ type: 'HTL_TO_STORE', htl })
  }
}


export default connect(null, mapDispatchToProps)(HotelCard)
