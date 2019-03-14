import React from 'react'
import { Card, Image, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { destination1, destination2 } from '../actions/index'

const DepartureCard = (props) => {
  return(
    <Card.Group itemsPerRow={2}>
      <Card>
        <Image src={props.dpt.destination_images.image_jpeg} />
        <Card.Content>
          <Card.Header>{props.dpt.smartyDisplay}</Card.Header>
          <Card.Meta>
            <span className='date'>TimeZone: {props.dpt.timezone}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Checkbox label='Depart From Here' />
        </Card.Content>
      </Card>
    </Card.Group>
  )
}


export default connect(null, { destination1, destination2 })(DepartureCard)
