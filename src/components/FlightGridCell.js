import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'




const FlightGridCell = (props) => {

  const { tripset, flightToStore } = props
  return(
    <Grid celled='internally'>
      <Grid.Column width={4} color='teal'>
        <Image src='http://graphicloads.com/wp-content/uploads/2015/09/Airline-Logos.jpg' />
      </Grid.Column>
      <Grid.Column color='teal' width={9}>
        <p>Price: {tripset.displayLow}</p>
        <p>Cabin: {tripset.cabinClass}</p>
        <p>Duration: {tripset.duration}</p>
        <p>Origin Airport: {tripset.flightRoutes[0].originAirport} Destination Airport: {tripset.flightRoutes[0].destinationAirport}</p>
      </Grid.Column>
      <Grid.Column color='teal' width={2}>
        {localStorage.getItem('token') ? <Link to='/hotels' color='yellow '><h4>Book Flight</h4><Button icon='plane' size='massive' onClick={() => flightToStore(tripset)}></Button></Link> : <p>Please Login or SignUp to Book a Flight! <Link to='/login'>Login</Link></p>}
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    flights: state.flight.flights
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    flightToStore: (tripset) => dispatch({ type: 'FLT_TO_STORE', tripset })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FlightGridCell)
