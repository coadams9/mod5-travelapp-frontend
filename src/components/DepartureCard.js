import React from 'react'
import { Card, Image, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectedDepart } from '../actions/index'

class DepartureCard extends React.Component {

  state = {
    selected: false
  }

  toggle = () => this.setState(({ selected }) => ({ selected: !selected }))

  handleChange = (dpt) => {
    this.toggle()
    this.props.selectedDepart(dpt)
  }

  render() {

    const { selected } = this.state
    const { dpt } = this.props

    return (
      <Card.Group itemsPerRow={2}>
        <Card>
          <Image src={dpt.destination_images.image_jpeg} />
          <Card.Content>
            <Card.Header>{dpt.smartyDisplay}</Card.Header>
            <Card.Meta>
              <span className='date'>TimeZone: {dpt.timezone}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Checkbox data-id="depart.checkbox" label='Depart From Here' checked={selected} onChange={(event) => this.handleChange(dpt)} />
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}



export default connect(null, { selectedDepart })(DepartureCard)
