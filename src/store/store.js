import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import postReducer from './post/posts-slice';
import pageReducer from './page/page-slice';

const store = configureStore({
  reducer: {
    posts: postReducer,
    page: pageReducer,
  },
  middleware: [thunk],
})
export default store;
