import {ADD, ADD_NUMBER, SUB} from '../actions/actionType';

const initialState = {
  counterOne: 0
}

export default function counterOne(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        counterOne: state.counterOne + 1
      }
    case SUB:
      return {
        counterOne: state.counterOne - 1
      }
    case ADD_NUMBER:
      return {
        counterOne: state.counterOne + action.payload
      }
    default:
      return state
  }
}