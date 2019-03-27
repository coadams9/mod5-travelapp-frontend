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

export function getHotelId(code) {
  return dispatch => {
    dispatch({ type: 'HTL_DATA', code })
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

export function flightPrice(price){
  return dispatch => {
    dispatch({ type: 'FLT_PRICE_TO_STORE', price })
  }
}

export function tripInfoToStore(data){
  return dispatch => {
    dispatch({ type: 'TRIP_INFO', data })
  }
}

export const flightPics = [ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbAPJH8Ge1h1AG7IXpXN7cObw1pVpFO4O_h5HcW3N6avk_TF-2A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IeL9fU8Fb7SW6h-vEMbwFVAl9ArJfDZ9QK_LCpQWKnWhlRNC2w', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6xlzsiZsq4CbXWo_n0c4FCXCtA7ZPSXKM4dCNn4cPwNwtMYILQ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2qAXNRzO_739fb9hjU6-77BprAK53SPqVXfXNZVK1plDRxbu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhfhwOduWdTi1WrHh0j2v4Gg4-ekQ_XeZOtBeItS6AXm5_xcv4A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdny0utUaI2vvXXAgcaQyJ-qMu9PksEFxV22G-quMUNo9xv_9vPA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pak1dCGI1D43OrhSZOpmyb5D9X1SNUWkLP8Se4HXiymvIGT5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJVlMu9tIlGdCOdPsYQs3mFCmfr6QwHi702OMIuAeZ4QUkLMQPw', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAx5s6dpM-kXSTp83cXuSX2HQtKzaBQ3ZHVcsR_g17w3G_qDQr' ]
