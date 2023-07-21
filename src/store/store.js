import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import postReducer from './post/posts-slice';

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: [thunk],
})
export default store;
