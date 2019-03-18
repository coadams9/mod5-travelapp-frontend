import React from 'react'
import { Card, Image, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectedArrival } from '../actions/index'

class ArrivalCard extends React.Component {

  state = {
    selected: false
  }

  toggle = () => this.setState(({ selected }) => ({ selected: !selected }))

  handleChange = (arv) => {
    this.toggle()
    this.props.selectedArrival(arv)

  }

  render(){

    const { selected } = this.state
    const { arv } = this.props

    return(
      <Card.Group itemsPerRow={2}>
        <Card>
          <Image src={arv.destination_images.image_jpeg} />
          <Card.Content>
            <Card.Header>{arv.smartyDisplay}</Card.Header>
            <Card.Meta>
              <span className='date'>TimeZone: {arv.timezone}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
              <Checkbox label='Arrive Here' checked={selected} onChange={(event) => this.handleChange(arv)}/>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

export default connect(null, { selectedArrival })(ArrivalCard)
