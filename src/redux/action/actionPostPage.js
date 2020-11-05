import {actionPostType} from '../actionTypes/actionTypesPage';

export const actionPostServer = {
  getPostsSaga: function getPostsSaga() {
    return {
      type: actionPostType.GET_POSTS_SAGA,
    }
  },

  setPostServer: function setPostServer(post) {
    return {
      type: actionPostType.SET_POST_SERVER,
      payload: post,
    }
  },

  getPostsUserIdSaga: function getPostsUserIdSaga() {
    return {
      type: actionPostType.GET_POST_USERID_SAGA,
    }
  },

  onHandlerIsShowComment: function onHandlerIsShowComment(index) {
    return {
      type: actionPostType.CHANGE_IS_SHOW_COMMENT,
      payload: index
    }
  },

  onChangeShowLoadingPost: function onChangeShowLoadingPost(value) {
    return {
      type: actionPostType.IS_SHOW_LOADING_POST_SERVER,
      payload: value
    }
  },

  onHideComment: function onHideComment() {
    return {
      type: actionPostType.HIDE_IS_COMMENT,
    }
  },

  getCommentsSaga: function getCommentsSaga(value) {
    return {
      type: actionPostType.GET_COMMENTS_SAGA,
      payload: value
    }
  },

  setCommentsSaga: function setCommentsSaga(value) {
    return {
      type: actionPostType.SET_COMMENTS_SERVER,
      payload: value
    }
  },

  onChangeShowLoadingComments: function onChangeShowLoadingComments(value) {
    return {
      type: actionPostType.IS_SHOW_LOADING_COMMENTS_SERVER,
      payload: value,
    }
  }

}



