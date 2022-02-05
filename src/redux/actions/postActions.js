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

export function addNewPost(newPost, allPosts) {
  return {
    type: actionTypes.ADD_NEW_POST,
    payload: [...allPosts, newPost],
  };
}

export function newPost(post) {
  console.log('post object', post);
  return function (dispatch) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('result', result);
        return dispatch(newPostSuccess(result));
      });
  };
}

export function newPostSuccess(post) {
  return {
    type: actionTypes.NEW_POST_SUCCESS,
    payload: { title: '', body: '' },
  };
}
