import React from 'react'
import { Form, Segment, Button, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import { KEY } from '../actions/index'
import HotelCard from './HotelCard'
import "react-datepicker/dist/react-datepicker.css"



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
    adults: '',
    loading: false
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

  handleClick = (checkIn, checkOut, rooms, adults, ctid) => {
    this.setState({ loading: true })
    
    setTimeout(() => {
      return this.setState({ loading: false })
    }, 9000)
    
    let newCheckIn = this.formatDate(checkIn)
    let newCheckOut = this.formatDate(checkOut)
    fetch(`https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?rooms=${rooms}&citycode=${ctid}&checkin=${newCheckIn}&checkout=${newCheckOut}&adults=${adults}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": KEY
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.props.hotelToStore(data)
    })
    debugger
  }

  showHotels = () => this.props.hotels.hotelset.map(htl => <HotelCard htl={htl} key={htl.id} />)


  render(){
    const { checkIn, checkOut, rooms, adults, loading } = this.state
    const { ctid, hotels } = this.props


    return(
      <div>
        <Segment id='hotelSelection'>
            <h1 id='hotelHead'>Choose A Hotel</h1>
              <Form id='hotelForm'>
                <div class='inputs'>
                  <strong><p>Check In Date</p></strong>
                  <DatePicker name='checkIn' selected={checkIn} onChange={(event) => this.setState({ checkIn: event })} />
                </div>
                <div class='inputs'>
                  <strong><p>Check Out Date</p></strong>
                  <DatePicker name='checkOut' selected={checkOut} onChange={(event) => this.setState({ checkOut: event })} />
                </div>
                <Form.Select id='select' label='Rooms' name='rooms' value={rooms} onChange={(event, { value }) => this.setState({ rooms: value })} options={roomOptions} placeholder='Number of Rooms...' />
                <Form.Select id='select' label='Adults' name='adults' value={adults} onChange={(event, { value }) => this.setState({ adults: value })} options={adultOptions} placeholder='Adults in Room...' />
                <Button id='hotelButn' loading={loading} color='yellow' onClick={() => this.handleClick(checkIn, checkOut, rooms, adults, ctid)}>Find Hotels</Button>
              </Form>
        </Segment>
        <Card.Group itemsPerRow={5}>
          {hotels ? this.showHotels() : null}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ctid: state.hotels.hotelId,
    hotels: state.hotels.hotelData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hotelToStore: (data) => dispatch({ type: 'SEARCHED_HOTELS', data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)
