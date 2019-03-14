import React from 'react'
import { Card, Image, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { destination1, destination2 } from '../actions/index'

const ArrivalCard = (props) => {
  return(
    <Card.Group itemsPerRow={2}>
      <Card>
        <Image src={props.arv.destination_images.image_jpeg} />
        <Card.Content>
          <Card.Header>{props.arv.smartyDisplay}</Card.Header>
          <Card.Meta>
            <span className='date'>TimeZone: {props.arv.timezone}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Checkbox label='Arrive Here' />
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default connect(null, { destination1, destination2 })(ArrivalCard)
