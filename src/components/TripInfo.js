import React from 'react'
import { connect } from 'react-redux'
import { Header, Button, Table, Icon, Rating } from 'semantic-ui-react'



class TripInfo extends React.Component {



  render(){
    const { trp } = this.props

    debugger

    return(
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Button animated='fade'><Button.Content visible>Choose Flight</Button.Content><Button.Content hidden>UnPack Your Bags</Button.Content></Button>
          </Table.Cell>
          <Table.Cell>
           Price:
           <br />
           Leaving at:
           <br />
           Arriving at:
           <br />
           AirPort:
           <br />
           Number:
          </Table.Cell>
          <Table.Cell>
            Hotel Name:
            <br />
            Hotel Price:
            <br />
            Number:
          </Table.Cell>
          <Table.Cell>
            put a box here that saves there shit.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tripInfo: state.flight.tripInfo
  }
}


export default connect(mapStateToProps)(TripInfo)
