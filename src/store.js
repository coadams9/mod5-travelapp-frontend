import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import locationReducer from './reducers/locationReducer'
import flightReducer from './reducers/flightReducer'

const rootReducer = combineReducers({
  search: locationReducer,
  flight: flightReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
