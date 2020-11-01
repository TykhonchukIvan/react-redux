import {takeLatest} from 'redux-saga/effects';
import {TEST_SAGA} from '../actionTypes/actionTypes';


function* firstSaga() {
  console.log('firstSaga')
}

export const sagas = [
  takeLatest(TEST_SAGA, firstSaga),
]