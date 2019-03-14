const KEY = '76182e7747msh53b229618ef96d3p13ca06jsn4d7563f38f2c'

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
    dispatch({type: 'SRCH_LOCT1', value })
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

export function destination1(){
  return null
}

export function destination2(){
  return null
}
