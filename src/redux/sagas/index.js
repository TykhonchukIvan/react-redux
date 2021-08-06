import {all} from 'redux-saga/effects';
import {sagasPost} from './sagaPostPage';

export default function* () {
  yield all([...sagasPost]);
}