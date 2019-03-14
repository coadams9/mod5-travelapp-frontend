import React from 'react'
import { Divider, Grid, Segment, Search, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { searchTerm1, searchTerm2 } from '../actions/index'
import DepartureCard from './DepartureCard'
import ArrivalCard from './ArrivalCard'



class LocationSelection extends React.Component {

  handleSearchChange1 = (e, { value }) => {
    this.props.searchTerm1(value)
  }

  handleSearchChange2 = (e, { value }) => {
    this.props.searchTerm2(value)
  }


  render(){

    const { departures, arrivals } = this.props

    const departs = departures.map(dpt => <DepartureCard key={dpt.id} dpt={dpt} />)
    const arrives = arrivals.map(arv => <ArrivalCard key={arv.id} arv={arv} />)



    return(
      <Segment id='location-selection'>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
          <Header as='h1' textAlign='center' color='blue'>Leaving From...</Header>
          <Search   aligned='left'
                    placeholder='Depart From...'
                    onSearchChange={this.handleSearchChange1}
                    showNoResults={false}
                    />
                    <div id='departs'>
                    {departs}
                    </div>
          </Grid.Column>
          <Grid.Column>
          <Header as='h1' textAlign='center' color='blue'>Arriving At...</Header>
          <Search aligned='right'
                  placeholder='Arrive At...'
                  onSearchChange={this.handleSearchChange2}
                  showNoResults={false}
                  />
                  <div id='arrivals'>
                  {arrives}
                  </div>
          </Grid.Column>
        </Grid>

        <Divider vertical></Divider>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    departures: state.search.departures,
    arrivals: state.search.arrivals
  }
}

export default connect(mapStateToProps, { searchTerm1, searchTerm2 })(LocationSelection)
