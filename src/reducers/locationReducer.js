const initialState = {
  searchTerm1: '',
  searchTerm2: '',
  departures: [],
  arrivals: [],
  selectedDepart: null,
  selectedArrival: null
}



const locationReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'SRCH_LOCT1': {
       return { ...oldState, searchTerm1: action.value }
    }
    case 'SRCH_LOCT2': {
       return { ...oldState, searchTerm2: action.value }
    }
    case 'SLC_DPT': {
      return { ...oldState, selectedDepart: action.dpt }
    }
    case 'SLC_ARV': {
      return { ...oldState, selectedArrival: action.arv }
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
