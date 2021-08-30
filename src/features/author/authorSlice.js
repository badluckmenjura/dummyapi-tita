import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAuthor } from './authorAPI';

const initialState = {
  status: 'idle',
  author:{
    dateOfBirth: '',
    email: '',
    firstName: '',
    gender: '',
    id: '',
    lastName: '',
    location:{
      street: '', 
      city: '', 
      state: '',
      timezone: ''
    },
    phone: '',
    registerDate: '',
    updatedDate: ''
  }
};

//consulta a https://dummyapi.io/ para el usuario que creo el post
export const getAuthor = createAsyncThunk(
  'author/author',
  async (userId) => {
    const response = await fetchAuthor(userId);
    return response.data;
  }
);

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    //limpia el usuario para cuando se cierre el modal
    emptyAuthor: (state) => {
      state.author = initialState.author;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAuthor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAuthor.fulfilled, (state, action) => {
        state.status = 'idle';
        state.author = action.payload;
      });
  },
});

export const {  emptyAuthor } = authorSlice.actions;

export const retrieveAuthor = (state) => state.author.author;


export default authorSlice.reducer;
