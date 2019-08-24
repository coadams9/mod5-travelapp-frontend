import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { flightPics } from '../actions/index'
import plane from '../images/plane.jpg'


const fPrices = [
  { key: 1, text: '$386', value: 1 },
  { key: 2, text: '$350', value: 2 },
  { key: 3, text: '$384', value: 3 },
  { key: 4, text: '$450', value: 4 },
  { key: 5, text: '$414', value: 5 },
  { key: 6, text: '$375', value: 6 },
  { key: 7, text: '$389', value: 7 },
  { key: 8, text: '$500', value: 8 },
  { key: 9, text: '$456', value: 9 },
  { key: 10, text: '$421', value: 10 },
  { key: 11, text: '$351', value: 11 },
  { key: 12, text: '$376', value: 12 },
  { key: 13, text: '$421', value: 13 },
  { key: 14, text: '$435', value: 14 }
]




const cPrices = [
  { key: 1, text: '$250', value: 1 },
  { key: 2, text: '$275', value: 2 },
  { key: 3, text: '$192', value: 3 },
  { key: 4, text: '$185', value: 4 },
  { key: 5, text: '$160', value: 5 },
  { key: 6, text: '$275', value: 6 },
  { key: 7, text: '$280', value: 7 },
  { key: 8, text: '$260', value: 8 },
  { key: 9, text: '$250', value: 9 },
  { key: 10, text: '$199', value: 10 },
  { key: 11, text: '$188', value: 11 },
  { key: 12, text: '$101', value: 12 },
  { key: 13, text: '$112', value: 13 },
  { key: 14, text: '$279', value: 14 }
]





Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
}

class FlightGridCell extends React.Component {

  handleClick = (price, segset) => {
    this.props.flightToStore(segset)
    this.props.flightPriceToStore(price)
  }

  render() {

    const { segset, flights } = this.props
    let price;
    console.log(flights)

    if (segset.cabin === 'first') {
      price = fPrices.sample().text
    } else {
      price = cPrices.sample().text
    }

    return (
      <Grid celled>
        <Grid.Column stretched={true} width={4}>
          <Image src={plane} />
        </Grid.Column>
        <Grid.Column id='flightInfo' width={9}>
          <h3>Price: {price}</h3>
          <h3>Depart Date: {flights.departDate}</h3>
          <h3>Departure Time: {segset.leaveTimeDisplay}</h3>
          <h3>Arrival Time: {segset.arriveTimeDisplay}</h3>
          <h3>Cabin: {segset.cabin}</h3>
          <h3>Duration: {segset.duration} mins</h3>
        </Grid.Column>
        <Grid.Column stretched={true} width={1}>
          {localStorage.getItem('token') ? <Link to='/hotels' color='yellow '><h4>Book Flight</h4><Button icon='plane' size='massive' onClick={(e) => this.handleClick(price, segset)}></Button></Link> : <p>Please Login or SignUp to Book a Flight! <Link to='/login'>Login</Link></p>}
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flights: state.flight.flights
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    flightToStore: (segset) => dispatch({ type: 'FLT_TO_STORE', segset }),
    flightPriceToStore: (price) => dispatch({ type: 'FLT_PRICE_TO_STORE', price })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FlightGridCell)
