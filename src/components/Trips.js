import React from 'react'
import { connect } from 'react-redux'
import { tripInfoToStore } from '../actions/index'
import TableHead from './TableHead'


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
      .then(data => this.props.tripInfoToStore(data))
  }

  componentDidMount() {
    this.tripInfo()
  }



  render() {
    const { hotel, flight, arv, dpt, fltPrc } = this.props
    this.saveTrip(hotel, flight, arv, dpt, fltPrc)


    return (
      <div id='table'>
        <TableHead />
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

export default connect(mapStateToProps, { tripInfoToStore })(Trips)
