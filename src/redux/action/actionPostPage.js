import {actionPostType} from '../actionTypes/actionTypesPage';

export function getPostsSaga() {
  return {
    type: actionPostType.GET_POSTS_SAGA
  }
}

export function setPostServer(post) {
  return {
    type: actionPostType.SET_POST_SERVER,
    payload: post,
  }
}

export function getPostsUserIdSaga() {
  return {
    type: actionPostType.GET_POST_USERID_SAGA,
  }
}

export function onHandlerIsShowComment(index) {
  return {
    type: actionPostType.CHANGE_IS_SHOW_COMMENT,
    payload: index
  }
}

export function onChangeShowLoading(value) {
  return {
    type: actionPostType.IS_SHOW_LOADING_POST_SERVER,
    payload: value
  }
}