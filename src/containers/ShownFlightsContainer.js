import React from 'react'
import FlightGridCell from '../components/FlightGridCell'
import { connect } from 'react-redux'


class ShownFlightsContainer extends React.Component {


  render(){
    const shownFlights = this.props.flights.tripset.map((tripset, index) => <FlightGridCell tripset={tripset} key={index} />)

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
