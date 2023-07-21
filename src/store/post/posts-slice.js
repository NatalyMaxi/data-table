import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
  posts: [],
  loading: false,
  postsPerPage: 10,
  currentPage: 1,
  error: null,
};

export const sliceName = 'posts';

export const fetchPosts = createAsyncThunk(
  `${sliceName}/fetchPosts`,
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const posts = await api.getPosts();
      return fulfillWithValue([...posts]);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const postsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrev: (state) => {
      state.currentPage--;
    },
    onChangeTodosPerpage: (state, action) => {
      state.todosPerPage = action.payload;
    },
    onClickCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const PostsAction = postsSlice.actions;
export default postsSlice.reducer;
