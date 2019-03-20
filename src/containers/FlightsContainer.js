import React from 'react'
// import FlightGridCell from '../components/FlightGridCell'
import ShownFlightsContainer from './ShownFlightsContainer'
import { connect } from 'react-redux'
import { Form, Header, Segment, Container, Button } from 'semantic-ui-react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { getDepartDate, adults, cabin, bags, KEY, showFlights } from '../actions/index'

const options = [
  { key: 1, text: 'Economy', value: 'e' },
  { key: 2, text: 'Business', value: 'b' },
  { key: 3, text: 'Premium Economy', value: 'p' },
  { key: 4, text: 'First', value: 'f' }
]

const adultOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 }
]

const bagOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
]


class FlightsContainer extends React.Component {

  formatDate = (date) => {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  getFlights = async (selectedDepart, selectedArrival, adultsSte, bagsSte, cabinSte, adults, cabin, bags, formattedDate) => {
    let fetchedFlights = await fetch(`https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1=${selectedDepart.apicode}&destination1=${selectedArrival.apicode}&departdate1=${formattedDate}&cabin=${cabinSte}&currency=USD&adults=${adultsSte}&bags=${bagsSte}`, {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": KEY
      }
    }).then(res => res.json())
    this.props.showFlights(fetchedFlights)
  }

  handleClick = (selectedDepart, selectedArrival, adultsSte, bagsSte, cabinSte, adults, cabin, bags) => {
    let newDate = this.props.departDate
    let formattedDate = this.formatDate(newDate)
    this.getFlights(selectedDepart, selectedArrival, adultsSte, bagsSte, cabinSte, adults, cabin, bags, formattedDate)
  }


  render(){
    const { selectedDepart, selectedArrival, getDepartDate, departDate, adultsSte, cabinSte, bagsSte, adults, cabin, bags, flights } = this.props


    return(
      <div>
      <Segment id='fltSegment'>
          <Header as='h3' floated='left'>Departing From: {selectedDepart.smartyDisplay}</Header> <Header as='h3' floated='right'>Arriving At: {selectedArrival.smartyDisplay}</Header>
          <Form id='flightForm'>
              <br />
              <Container id='flightFormInputs'>
                <strong><p id='dateLabel'>Departure Date</p></strong>
                <DatePicker id='datePicker' selected={departDate} onChange={getDepartDate} />
                <Form.Group inline>
                  <Form.Select fluid label='Adults' onChange={(e, { value }) => adults(value)} options={adultOptions} placeholder='Adults on Flight' />
                  <Form.Select fluid label='Cabin' onChange={(e, { value }) => cabin(value)} options={options} placeholder='Cabin Preference' />
                  <Form.Select fluid label='Bags' onChange={(e, { value }) => bags(value)} options={bagOptions} placeholder='Number of Bags' />
                  <Button onClick={() => this.handleClick(selectedDepart, selectedArrival, adultsSte, bagsSte, cabinSte, departDate)} id='fltButn' label='Lets Go!!'></Button>
                </Form.Group>
              </Container>
          </Form>
      </Segment>
      <Container>
         {flights ? <ShownFlightsContainer /> : null}
      </Container>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    selectedDepart: state.search.selectedDepart,
    selectedArrival: state.search.selectedArrival,
    departDate: state.flight.departDate,
    adultsSte: state.flight.adults,
    bagsSte: state.flight.bags,
    cabinSte: state.flight.cabin,
    flights: state.flight.flights
  }
}

export default connect(mapStateToProps, { getDepartDate, adults, cabin, bags, showFlights })(FlightsContainer)
