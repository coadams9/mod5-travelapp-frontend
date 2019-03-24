import React from 'react'
import FlightGridCell from '../components/FlightGridCell'
import { connect } from 'react-redux'


class ShownFlightsContainer extends React.Component {


  render(){
    const segsetData = this.props.flights.segset
    const flightsArray = Object.values(segsetData)
    const shownFlights = flightsArray.map(flt => <FlightGridCell segset={flt} />)

    return(
      <div>
         {shownFlights}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flights: state.flight.flights
  }
}

export default connect(mapStateToProps)(ShownFlightsContainer)
