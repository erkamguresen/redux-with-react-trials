import * as actionTypes from '../actions/types';

export function fetchPosts() {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: actionTypes.FETCH_POSTS,
          payload: json,
        })
      );
  };
}
