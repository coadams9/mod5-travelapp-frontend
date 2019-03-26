import React from 'react'
import { connect } from 'react-redux'
import { Header, Button, Table, Icon, Rating } from 'semantic-ui-react'



class TripInfo extends React.Component {

  deleteTrip = (event, trp) => {
    debugger
    event.target.parentElement.parentElement.parentElement.remove()
    fetch(`http://localhost:3000/trips/${trp.id}`, {
      method: 'DELETE'
    })
  }


  render(){
    const { trp } = this.props
    console.log(trp)

    return(
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            Leaving From: {trp.dptdisplay}
            <br />
            Arriving At: {trp.arvdisplay}
          </Table.Cell>
          <Table.Cell>
           Price: {trp.fltPrc}
           <br />
           Leaving at: {trp.leavingat}
           <br />
           Arriving at: {trp.arrivingat}
          </Table.Cell>
          <Table.Cell>
            Hotel Name: {trp.hotelname}
            <br />
            Hotel Price: {trp.hotelprice}
            <br />
            Number: {trp.hotelphone}
            <br />
            Address: {trp.hoteladdress}
          </Table.Cell>
          <Table.Cell>
            <Button onClick={(event) => this.deleteTrip(event, trp)} animated='fade'><Button.Content visible>Delete Trip</Button.Content><Button.Content hidden>UnPack Your Bags</Button.Content></Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tripInfo: state.flight.tripInfo
  }
}


export default connect(mapStateToProps)(TripInfo)
