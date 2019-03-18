const initialState = {
  departDate: new Date(),
  cabin: null,
  adults: null,
  bags: null,
  flights: []
}




const flightReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'DPT_DATE': {
      return { ...oldState, departDate: action.date}
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
