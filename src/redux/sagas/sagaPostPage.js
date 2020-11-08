import {takeLatest, call, put} from 'redux-saga/effects';
import {actionPostType} from '../actionTypes/actionTypesPage';
import {actionPostServer} from '../action/actionPostPage';
import {apiRequestsPostPage} from '../../api/apiRequests';

const complexCompute = (num) => {
  let i = 0;
  while (i < 1000000000) i++
  return num * 2;
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

function* getPostsWithServerSaga() {
  try {
    yield put(actionPostServer.onChangeShowLoadingPost(true))
    const response = yield call(apiRequestsPostPage.getPosts)
    if (response.status === 200) {
      const posts = yield response.json()
      yield put(actionPostServer.setPostServer(posts))
      yield put(actionPostServer.onChangeShowLoadingPost(false))
    }
  } catch (e) {
    console.error(e, 'getPostsWithServerSaga')
  }
}

function* getPostsUserIDWithServerSaga() {

  const userId = randomInteger(1, 9)
  const param = `userId=${userId}&_limit=5`
  try {
    yield put(actionPostServer.setPostServer([]))
    yield put(actionPostServer.onChangeShowLoadingPost(true))
    const response = yield call(apiRequestsPostPage.getPostsUserId, param)
    if (response.status === 200) {
      const posts = yield response.json()
      // timeAut
      const number = yield call(complexCompute, 1000)
      yield put(actionPostServer.setPostServer(posts))
      yield put(actionPostServer.onChangeShowLoadingPost(false))
    }
  } catch (e) {
    console.error(e, 'getPostsUserIDWithServerSaga')
  }
}

function* getCommentsWithServerSaga(action) {
  const postId = action.payload
  const param = `${postId}/comments`
  try {
    yield put(actionPostServer.setCommentsSaga([]))
    yield put(actionPostServer.onChangeShowLoadingComments(true))
    const response = yield call(apiRequestsPostPage.getCommentPostID, param)
    if (response.status === 200) {
      const comments = yield response.json()
      const number = yield call(complexCompute, 1000)
      yield put(actionPostServer.setCommentsSaga(comments))
      yield put(actionPostServer.onChangeShowLoadingComments(false))
    }
  } catch (e) {
    console.error(e, 'getCommentsWithServerSaga')
  }
}

function* createPostSaga(action){
  console.log(action.payload)
}

export const sagasPost = [
  takeLatest(actionPostType.GET_POSTS_SAGA, getPostsWithServerSaga),
  takeLatest(actionPostType.GET_POST_USERID_SAGA, getPostsUserIDWithServerSaga),
  takeLatest(actionPostType.GET_COMMENTS_SAGA, getCommentsWithServerSaga),
  takeLatest(actionPostType.ADD_POST_VALUE_SAGA, createPostSaga)
]