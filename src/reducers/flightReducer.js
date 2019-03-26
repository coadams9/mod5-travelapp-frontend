const initialState = {
  departDate: new Date(),
  cabin: null,
  adults: null,
  bags: null,
  flights: false,
  selectedFlight: null,
  flightPrice: null,
  tripInfo: null
}






const flightReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'TRIP_INFO': {
      return { ...oldState, tripInfo: action.data}
    }
    case 'FLT_PRICE_TO_STORE': {
      return { ...oldState, flightPrice: action.price}
    }
    case 'DPT_DATE': {
      return { ...oldState, departDate: action.date}
    }
    case 'FLT_TO_STORE': {
      return { ...oldState, selectedFlight: action.segset }
    }
    case 'CABIN': {
      return { ...oldState, cabin: action.value }
    }
    case 'ADULTS': {
      return { ...oldState, adults: action.value }
    }
    case 'BAGS': {
      return { ...oldState, bags: action.value }
    }
    case 'ADD_FLIGHTS': {
      return { ...oldState, flights: action.data }
    }
    default: {
      return oldState
    }

  }
}

export default flightReducer
