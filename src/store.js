import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import locationReducer from './reducers/locationReducer'
import flightReducer from './reducers/flightReducer'
import hotelReducer from './reducers/hotelReducer'

const rootReducer = combineReducers({
  search: locationReducer,
  flight: flightReducer,
  hotels: hotelReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
