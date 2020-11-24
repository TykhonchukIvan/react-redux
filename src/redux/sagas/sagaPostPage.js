import {takeLatest, call, put, all, race, delay} from 'redux-saga/effects';
import {actionPostType} from '../actionTypes/actionTypesPage';
import {actionPostServer} from '../action/actionPostPage';
import {apiRequestsPostPage} from '../../api/apiRequests';
import {checkValidation} from '../../helpers/helpers';

function complexCompute (num) {
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
    yield delay(1000);
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
    yield delay(1000);
    const response = yield call(apiRequestsPostPage.getPostsUserId, param)
    if (response.status === 200) {
      const posts = yield response.json()
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
    yield delay(1000);
    const response = yield call(apiRequestsPostPage.getCommentPostID, param)
    if (response.status === 200) {
      const comments = yield response.json()
      yield put(actionPostServer.setCommentsSaga(comments))
      yield put(actionPostServer.onChangeShowLoadingComments(false))
    }
  } catch (e) {
    console.error(e, 'getCommentsWithServerSaga')
  }
}

function* createPostSaga(action) {
  const {title, body} = action.payload

  const titleValid = yield call(checkValidation, title)
  const bodyValid = yield call(checkValidation, body)

  const errorTitle = {
    isErrorValid: titleValid.isErrorStatus,
    errorText: titleValid.message,
  }
  const errorBody = {
    isErrorValid: bodyValid.isErrorStatus,
    errorText: bodyValid.message,
  }

  yield all([
    put(actionPostServer.checkValueTitle(errorTitle)),
    put(actionPostServer.checkValueBody(errorBody)),
  ]);

  if (titleValid.isErrorStatus === false && bodyValid.isErrorStatus === false) {
    const data = {
      title: titleValid.data,
      body: bodyValid.data,
    }
    yield delay(1000);
    yield put(actionPostServer.addCreatedPosts(data))
  }
}

export const sagasPost = [
  takeLatest(actionPostType.GET_POSTS_SAGA, getPostsWithServerSaga),
  takeLatest(actionPostType.GET_POST_USERID_SAGA, getPostsUserIDWithServerSaga),
  takeLatest(actionPostType.GET_COMMENTS_SAGA, getCommentsWithServerSaga),
  takeLatest(actionPostType.ADD_POST_VALUE_SAGA, createPostSaga)
]