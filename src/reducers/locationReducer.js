const initialState = {
  searchTerm1: '',
  searchTerm2: '',
  departures: [],
  arrivals: [],
  destination1: '',
  destination2: ''
}



const locationReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'SRCH_LOCT1': {
       return { ...oldState, searchTerm1: action.value }
    }
    case 'SRCH_LOCT2': {
       return { ...oldState, searchTerm2: action.value }
    }
    case 'DESTI1': {
      return { ...oldState, destination1: action.selected }
    }
    case 'DESTI2': {
      return { ...oldState, destination2: action.selected }
    }
    case 'DEPARTURES': {
      return { ...oldState, departures: action.data }
    }
    case 'ARRIVALS': {
      return { ...oldState, arrivals: action.data }
    }
    default: {
      return oldState
    }
  }
}

export default locationReducer
