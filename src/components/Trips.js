import React from 'react'
import { connect } from 'react-redux'
import { Header, Button, Table, Icon, Rating } from 'semantic-ui-react'
import { KEY } from '../actions/index'
import TripInfo from './TripInfo'




class Trips extends React.Component {

  saveTrip = (hotel, flight, arv, dpt, fltPrc) => {
    fetch('http://localhost:3000/trips', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': localStorage.getItem('token')
      },
      method: 'POST',
      body: JSON.stringify({
        leavingat: flight.leaveTimeDisplay,
        arrivingat: flight.arriveTimeDisplay,
        arvdisplay: arv.displayname,
        dptdisplay: dpt.displayname,
        fltPrc: fltPrc,
        hotelname: hotel.name,
        hotelprice: hotel.price,
        hotelphone: hotel.phone,
        hoteladdress: hotel.displayaddress
      })
    })
  }


  tripInfo = () => {
    let userId = localStorage.userId
    fetch(`http://localhost:3000/trips/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    .then(data => data.trips.map(trp => <TripInfo trp={trp} key={trp.id} />))
  }


  render(){
    const { hotel, flight, arv, dpt, fltPrc } = this.props
    this.saveTrip(hotel, flight, arv, dpt, fltPrc)



    return(
      <div>
      <Table celled padded>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell singleLine>{localStorage.username}s Trips</Table.HeaderCell>
             <Table.HeaderCell>Flight Details</Table.HeaderCell>
             <Table.HeaderCell>Hotel Details</Table.HeaderCell>
             <Table.HeaderCell>Notes</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         {this.tripInfo()}
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
    dpt: state.search.selectedDepart,
    fltPrc: state.flight.flightPrice
  }
}

export default connect(mapStateToProps)(Trips)
