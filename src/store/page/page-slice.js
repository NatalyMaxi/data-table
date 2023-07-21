import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

export const sliceName = 'page';


const pageSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    updatePageReducer: (state, action) => {
      state.page = action.payload;
    }
  },
});

export const PageAction = pageSlice.actions;
export default pageSlice.reducer;
