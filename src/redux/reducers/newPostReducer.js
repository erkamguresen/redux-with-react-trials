import * as actionTypes from '../actions/types';
import initialState from '../initialState.js';

export default function newPostReducer(state = initialState.newPost, action) {
  switch (action.type) {
    case actionTypes.NEW_POST:
      return action.payload;
    case actionTypes.NEW_POST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
