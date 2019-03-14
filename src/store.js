import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import locationReducer from './reducers/locationReducer'
// import eatenReducer from './reducers/eatenReducer'

const rootReducer = combineReducers({
  search: locationReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));
