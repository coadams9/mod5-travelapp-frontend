import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import TripInfo from './TripInfo'






class TableHead extends React.Component {

  showTrips = () => this.props.tripInfo.trips.map(trp => <TripInfo trp={trp} />)

  render(){
    const { tripInfo } = this.props
    console.log(tripInfo)
    return(
      <Table celled padded>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell singleLine>{localStorage.username}s Trips</Table.HeaderCell>
             <Table.HeaderCell>Flight Details</Table.HeaderCell>
             <Table.HeaderCell>Hotel Details</Table.HeaderCell>
             <Table.HeaderCell>Delete Trip</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         {tripInfo ? this.showTrips() : null}
      </Table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tripInfo: state.flight.tripInfo
  }
}


export default connect(mapStateToProps)(TableHead)
