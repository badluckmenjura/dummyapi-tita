import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchComents } from './commentAPI';

const initialState = {
  status: 'idle',
  comments:[]
};

//consulta a https://dummyapi.io/ para los comentarios de un post
export const getComents = createAsyncThunk(
  'comment/comment',
  async (userId) => {
    const response = await fetchComents(userId);
    return response.data;
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    //limpia los comentarios para cuando se cierre el modal
    emptyComents: (state) => {
      state.comments = initialState.comments;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getComents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getComents.fulfilled, (state, action) => {
        state.status = 'idle';
        state.comments = action.payload;
      });
  },
});

export const {  emptyComents } = commentSlice.actions;

export const retrieveComments = (state) => state.comment.comments;


export default commentSlice.reducer;
