import React from 'react'
import { connect } from 'react-redux'
import { Header, Button, Table, Icon, Rating } from 'semantic-ui-react'
import { KEY } from '../actions/index'



class Trips extends React.Component {

  saveTrip = (hotel, flight, arv, dpt) => {
    fetch('http://localhost:3000/trips', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': localStorage.getItem('token')
      },
      method: 'POST',
      body: JSON.stringify({
        hotelinfo: hotel,
        flightinfo: flight,
        arv: arv,
        dpt: dpt
      })
    })
  }


  render(){

    const { hotel, flight, arv, dpt } = this.props
    this.saveTrip(hotel, flight, arv, dpt)
    console.log(this.props)
    return(
      <div>
      <Table celled padded>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell singleLine>{localStorage.username}'s Trips</Table.HeaderCell>
             <Table.HeaderCell>Flight Details</Table.HeaderCell>
             <Table.HeaderCell>Hotel Details</Table.HeaderCell>
             <Table.HeaderCell>Notes</Table.HeaderCell>
           </Table.Row>
         </Table.Header>

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
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hotel: state.hotels.selectedHotel,
    flight: state.flight.selectedFlight,
    arv: state.search.selectedArrival,
    dpt: state.search.selectedDepart
  }
}

export default connect(mapStateToProps)(Trips)
