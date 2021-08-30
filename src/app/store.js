import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import feedReducer from '../features/feed/feedSlice';
import authorReducer from '../features/author/authorSlice';
import commenReducer from '../features/comment/commentSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    feed: feedReducer,
    author: authorReducer,
    comment: commenReducer
  },
});
