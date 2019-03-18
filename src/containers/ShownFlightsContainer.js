import React from 'react'
import FlightGridCell from '../components/FlightGridCell'
import { connect } from 'react-redux'


class ShownFlightsContainer extends React.Component {



  render(){
    const shownFlights = this.props.flights.map(flt => <FlightGridCell flt={flt} />)

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
