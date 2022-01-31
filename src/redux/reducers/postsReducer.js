import * as actionTypes from '../actions/types';
import initialState from '../initialState.js';

export default function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case actionTypes.NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
}
