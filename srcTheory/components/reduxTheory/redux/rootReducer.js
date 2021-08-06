import {combineReducers} from 'redux'
import counterOne from './reducers/counterOne';
import counterTwo from './reducers/counterTwo';


export default combineReducers({
  counter1:counterOne,
  counter2:counterTwo,
})