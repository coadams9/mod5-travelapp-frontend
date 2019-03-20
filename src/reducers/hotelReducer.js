const initialState = {
  hotelId: null
}


const hotelReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'HTL_DATA': {
      return { ...oldState, hotelId: action.code}
    }
    default: {
      return oldState
    }
  }
}

export default hotelReducer
