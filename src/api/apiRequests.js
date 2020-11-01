import {getPostsUrl} from './constantsUrl';

export const apiRequestsPostPage = {
  getPosts: function getPosts() {
    const method = {method: 'GET'}
    return fetch(getPostsUrl, method)
      .then(response => response)
  }
}



