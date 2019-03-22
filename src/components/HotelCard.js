import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class HotelCard extends React.Component {


  render(){
    const { htl, hotelToStore } = this.props

    return(
      <Card>
         <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzLvjmEJvrGketgZ0tcNMivuUzGozWB7cFu2NK14blmNjzrh_FA' />
        <Card.Content>
          <Card.Header color='red'>{htl.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>Price: {htl.price}</Card.Description>
          <Card.Description>Address: {htl.displayaddress}</Card.Description>
          <Card.Description>Phone Number: {htl.phone}</Card.Description>
          <Card.Description>User Rating: {htl.userrating}</Card.Description>
          <Card.Description>Brand: {htl.brand}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='star'>{htl.stars} Stars</Icon>
          <div className='ui two buttons'>
            <Button as={ Link } to='/trips' basic color='green' onClick={() => hotelToStore(htl)}>Book Hotel</Button>
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
