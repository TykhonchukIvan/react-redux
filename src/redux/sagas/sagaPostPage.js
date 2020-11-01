import {takeLatest, call, put} from 'redux-saga/effects';
import {actionPostType} from '../actionTypes/actionTypesPage';
import {setPostServer} from '../action/actionPostPage';
import {apiRequestsPostPage} from '../../api/apiRequests';

function* getPostsWithServerSaga() {
  try {
    const response = yield call(apiRequestsPostPage.getPosts)
    if (response.status === 200) {
      const posts = yield response.json()
      yield put(setPostServer(posts))
    }
  } catch (e) {
    console.error(e, 'getPostsWithServerSaga')
  }
}

export const sagasPost = [
  takeLatest(actionPostType.GET_POSTS_SAGA, getPostsWithServerSaga),
]