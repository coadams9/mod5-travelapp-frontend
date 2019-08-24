import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { flightPics } from '../actions/index'
import { withRouter } from 'react-router-dom'



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
    this.props.history.push('/hotels')
  }

  render() {

    const { segset, flights } = this.props
    let price;

    if (segset.cabin === 'first') {
      price = fPrices.sample().text
    } else {
      price = cPrices.sample().text
    }

    return (
      <Grid celled>
        <Grid.Column stretched={true} width={4}>
          <Image src={flightPics.sample()} />
        </Grid.Column>
        <Grid.Column id='flightInfo' width={9}>
          <div id='insideFlightInfo'>
            <div className='flightDetails'>
              <h3>Price:</h3>
              <h3>{price}</h3>
            </div>
            <div className='flightDetails'>
              <h3>Depart Date:</h3>
              <h3>{flights.departDate}</h3>
            </div>
            <div className='flightDetails'>
              <h3>Departure Time:</h3>
              <h3>{segset.leaveTimeDisplay}</h3>
            </div>
            <div className='flightDetails'>
              <h3>Arrival Time:</h3>
              <h3>{segset.arriveTimeDisplay}</h3>
            </div>
            <div className='flightDetails'>
              <h3>Cabin:</h3>
              <h3>{segset.cabin}</h3>
            </div>
            <div className='flightDetails'>
              <h3>Duration:</h3>
              <h3>{segset.duration} mins</h3>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column stretched={true} width={3}>
          {localStorage.getItem('token') ? <Button id='bkfltbutton' basic inverted color='blue' size='large' onClick={(e) => this.handleClick(price, segset)}>Book Flight!</Button> : null}
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

const WRFlightGridCell = withRouter(FlightGridCell)
export default connect(mapStateToProps, mapDispatchToProps)(WRFlightGridCell)
