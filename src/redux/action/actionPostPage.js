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