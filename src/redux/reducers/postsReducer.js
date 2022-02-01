import * as actionTypes from '../actions/types';
import initialState from '../initialState.js';

export default function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return action.payload;
    case actionTypes.GET_POSTS_SUCCESS:
      return action.payload;
    case actionTypes.NEW_POST:
      return action.payload;
    default:
      return state;
  }

  // switch (action.type) {
  //   case actionTypes.FETCH_POSTS:
  //     return {
  //       ...state,
  //       posts: action.payload,
  //     };
  //   case actionTypes.NEW_POST:
  //     return {
  //       ...state,
  //       posts: [...state.posts, action.payload],
  //     };
  //   default:
  //     return state;
  // }
}
