import React from 'react'
import { Divider, Grid, Segment, Search, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { searchTerm1, searchTerm2 } from '../actions/index'
import DepartureCard from './DepartureCard'
import ArrivalCard from './ArrivalCard'
import { Link } from 'react-router-dom'
import { getHotelId } from '../actions/index'




class LocationSelection extends React.Component {

  handleSearchChange1 = (e, { value }) => {
    this.props.searchTerm1(value)
  }

  handleSearchChange2 = (e, { value }) => {
    this.props.searchTerm2(value)
  }


  render() {

    const { departures, arrivals, slctdDep, slctdArv, getHotelId } = this.props


    const departs = departures.map(dpt => <DepartureCard key={dpt.id} dpt={dpt} />)
    const arrives = arrivals.map(arv => <ArrivalCard key={arv.id} arv={arv} />)

    return (
      <React.Fragment>
        <Header id='welcomeHead' style={{ textAlign: 'center', color: 'gold', fontSize: '25px' }}>Where Are We Going Today {localStorage.username.toUpperCase()}?</Header>
        <Segment id='location-selection'>
          {slctdArv && slctdDep !== false ? <Link to='/flights'><Button color='yellow' onClick={() => getHotelId(slctdArv.ctid)} attached='top' animated='fade'><Button.Content visible>Choose Flight</Button.Content><Button.Content hidden>Pack Your Bags !!</Button.Content></Button></Link> : null}
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <Header id="leavingFromHead" as='h1'>Leaving From...</Header>
              <Search aligned='left'
                placeholder='Depart From...'
                onSearchChange={this.handleSearchChange1}
                showNoResults={false}
                data-id='departs.input'
              />
              <div id='departs'>
                {departs}
              </div>
            </Grid.Column>
            <Grid.Column>
              <Header id="arrivingAtHead" as='h1'>Arriving At...</Header>
              <Search aligned='right'
                placeholder='Arrive At...'
                onSearchChange={this.handleSearchChange2}
                showNoResults={false}
                data-id='arrivings.input'
              />
              <div id='arrivals'>
                {arrives}
              </div>
            </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
          {slctdArv && slctdDep !== null ? <Link to='/flights'><Button color='yellow' onClick={() => getHotelId(slctdArv.ctid)} attached='bottom' animated='fade'><Button.Content visible>Choose Flight</Button.Content><Button.Content hidden>Pack Your Bags !!</Button.Content></Button></Link> : null}
        </Segment>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    departures: state.search.departures,
    arrivals: state.search.arrivals,
    slctdDep: state.search.selectedDepart,
    slctdArv: state.search.selectedArrival
  }
}

export default connect(mapStateToProps, { searchTerm1, searchTerm2, getHotelId })(LocationSelection)
