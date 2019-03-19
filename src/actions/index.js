export const KEY = '76182e7747msh53b229618ef96d3p13ca06jsn4d7563f38f2c'

export function searchTerm1(value) {
  return dispatch => {
    fetch(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=/${value}`, {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": KEY
      },
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'DEPARTURES', data })
    })
    dispatch({ type: 'SRCH_LOCT1', value })
  }
}

export function searchTerm2(value) {
  return dispatch => {
    fetch(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=/${value}`, {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": KEY
      },
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'ARRIVALS', data })
    })
    dispatch({ type: 'SRCH_LOCT2', value })
  }
}

export function selectedDepart(dpt){
  return dispatch => {
    dispatch({ type: 'SLC_DPT', dpt })
  }
}

export function selectedArrival(arv){
  return dispatch => {
    dispatch({ type: 'SLC_ARV', arv })
  }
}

export function getDepartDate(date){
  return dispatch => {
    dispatch({ type: 'DPT_DATE', date })
  }
}

export function adults(value) {
  return dispatch => {
    dispatch({ type: 'ADULTS', value })
  }
}

export function cabin(value) {
  return dispatch => {
    dispatch({ type: 'CABIN', value })
  }
}

export function bags(value) {
  return dispatch => {
    dispatch({ type: 'BAGS', value })
  }
}

export function showFlights(data){
  return dispatch => {
    dispatch({ type: 'ADD_FLIGHTS', data })
  }
}
