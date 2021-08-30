import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  user:{
    imageUrl: '',
    email:'',
    name:''
  }
  
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    //guarda información del usuario logueados despues de llamar el servicio de autenticación externo
    setUserLogin: (state, action) => {
      state.user = {
        imageUrl: action.payload.imageUrl ? action.payload.imageUrl : action.payload.picture,
        email: action.payload.email,
        name: action.payload.name
      }
    },
    //elimina datos del usuario del store
    logOut: (state) => {
      state.user = initialState.user
    },
  },
});

export const { setUserLogin, logOut } = loginSlice.actions;

export const getUserLogin = (state) => {
  return state.login.user
};


export default loginSlice.reducer;
