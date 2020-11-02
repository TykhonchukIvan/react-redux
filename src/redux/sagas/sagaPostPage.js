import {takeLatest, call, put} from 'redux-saga/effects';
import {actionPostType} from '../actionTypes/actionTypesPage';
import {setPostServer, onChangeShowLoading} from '../action/actionPostPage';
import {apiRequestsPostPage} from '../../api/apiRequests';

const complexCompute = (num) => {
  let i = 0;
  while (i < 1000000000) i++
  return num * 2;
}

function* getPostsWithServerSaga() {
  try {
    const response = yield call(apiRequestsPostPage.getPosts)
    if (response.status === 200) {
      const posts = yield response.json()
      yield put(setPostServer(posts))
      yield put(onChangeShowLoading(false))
    }
  } catch (e) {
    console.error(e, 'getPostsWithServerSaga')
  }
}

function* getPostsUserIDWithServerSaga() {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

  const userId = randomInteger(1, 9)
  const param = `userId=${userId}&_limit=5`
  try {
    yield put(setPostServer([]))
    yield put(onChangeShowLoading(true))
    const response = yield call(apiRequestsPostPage.getPostsUserId, param)
    if (response.status === 200) {
      const posts = yield response.json()
      // timeAut
      const number = yield call(complexCompute,1000)
      yield put(setPostServer(posts))
      yield put(onChangeShowLoading(false))
    }
  } catch (e) {
    console.error(e, 'getPostsUserIDWithServerSaga')
  }
}

export const sagasPost = [
  takeLatest(actionPostType.GET_POSTS_SAGA, getPostsWithServerSaga),
  takeLatest(actionPostType.GET_POST_USERID_SAGA, getPostsUserIDWithServerSaga),
]