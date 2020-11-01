import {all} from 'redux-saga/effects';
import {sagas} from './saga';

export default function* () {
  yield all([...sagas]);
}