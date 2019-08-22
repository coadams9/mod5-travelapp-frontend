const initialState = {
  hotelId: null,
  hotelData: false,
  selectedHotel: null
}


const hotelReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'HTL_TO_STORE': {
      return { ...oldState, selectedHotel: action.htl }
    }
    case 'HTL_DATA': {
      return { ...oldState, hotelId: action.code }
    }
    case 'SEARCHED_HOTELS': {
      return { ...oldState, hotelData: action.data }
    }
    default: {
      return oldState
    }
  }
}

export default hotelReducer
