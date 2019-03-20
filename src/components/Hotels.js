import React from 'react'
import { Form, Header, Segment, Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"

const adultOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 }
]

const roomOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
  { key: 7, text: '7', value: 7 },
  { key: 8, text: '8', value: 8 }
]


class Hotels extends React.Component {

  state = {
    checkIn: new Date(),
    checkOut: new Date(),
    rooms: '',
    adults: ''
  }

  formatDate = (date) => {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }


  render(){
    const { checkIn, checkOut, rooms, adults } = this.state
    return(
      <Segment id='location-selection'>
        <Container>
          <Header as='h1' textAlign='center'>Choose A Hotel</Header>
          <strong><p id='dateLabel'>Check In Date</p></strong>
          <DatePicker id='datePicker' selected={checkIn} onChange={(e) => this.setState({ checkIn: e.target.value })} />
          <strong><p id='dateLabel'>Check Out Date</p></strong>
          <DatePicker id='datePicker' selected={checkOut} onChange={(e) => this.setState({ checkOut: e.target.value })} />
          <Form.Group inline>
            <Form.Select fluid label='Rooms' name='rooms' value={rooms} onChange={(e) => this.setState({ rooms: e.target.value })} options={roomOptions} placeholder='Number of Rooms...' />
            <Form.Select fluid label='Adults' name='adults' value={adults} onChange={(e) => this.setState({ adults: e.target.value })} options={adultOptions} placeholder='Adults in Room...' />
            <Button onClick={() => this.handleClick()} id='fltButn' label='Lets Go!!'></Button>
          </Form.Group>
        </Container>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ctid: state.hotels.hotelId
  }
}

export default connect(mapStateToProps)(Hotels)
