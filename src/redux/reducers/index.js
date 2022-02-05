import { combineReducers } from 'redux';
import postsReducer from './postsReducer.js';
import newPostReducer from './newPostReducer.js';

const rootReducer = combineReducers({
  posts: postsReducer,
  newPost: newPostReducer,
});

export default rootReducer;
