import * as actionTypes from '../actions/types';

export function getPosts() {
  return function (dispatch) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPostsSuccess(result)));
  };
}

export function getPostsSuccess(posts) {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload: posts,
  };
}

export function newPost(post) {
  return {
    type: actionTypes.NEW_POST,
    payload: post,
  };
}
