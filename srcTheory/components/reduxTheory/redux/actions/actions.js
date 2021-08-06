import {ADD, ADD_NUMBER, ADD_TWO, SUB} from './actionType';

export function add() {
  return {
    type: ADD
  }
}

export function sub() {
  return {
    type: SUB
  }
}

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    payload: number
  }
}

export function asyncAdd(number) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNumber(number))
    }, 3000)
  }
}

export function addTwo(number) {
  return {
    type: ADD_TWO,
    payload: number
  }
}