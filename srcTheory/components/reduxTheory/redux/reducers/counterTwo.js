import {ADD_TWO} from '../actions/actionType';

const initialState = {
  counterTwo: 100
}

export default function counterTwo(state = initialState, action) {
  switch (action.type) {
    case ADD_TWO:
      return {
        counterTwo: state.counterTwo + action.payload
      }
    default:
      return state
  }
}