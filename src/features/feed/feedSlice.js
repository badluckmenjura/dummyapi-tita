import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPost } from './feedAPI';

const initialState = {
  status: 'idle',
  post:[]
};

//consulta a https://dummyapi.io/ para el listado de post
export const getPosts = createAsyncThunk(
  'feed/fetchPost',
  async (opt) => {
    const response = await fetchPost(opt.limit, opt.page, opt.tag);
    return response.data;
  }
);

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    //limpia el arreglo de post para cuando se cierre sesión
    empyPosts: (state) => {
      state.post = initialState.post;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.post.push(...action.payload);
      });
  },
});

export const {  empyPosts } = feedSlice.actions;

export const listPosts = (state) => state.feed.post;


export default feedSlice.reducer;
