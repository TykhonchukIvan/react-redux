import {getPostsUrl} from './constantsUrl';
import {getPostsUrlUserId} from './constantsUrl';
import {getCommentUrl} from './constantsUrl';

export const apiRequestsPostPage = {
  getPosts: function getPosts() {
    const method = {method: 'GET'}
    return fetch(getPostsUrl, method)
      .then(response => response)
  },
  getPostsUserId: function getPostsUserId(params) {
    const method = {method: 'GET'}
    return fetch(getPostsUrlUserId + params, method)
      .then(response => response)
  },
  getCommentPostID: function getCommentPostID(params) {
    const method = {method: 'GET'}
    return fetch(getCommentUrl + params, method)
      .then(response => response)
  }
}




