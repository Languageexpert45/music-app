import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/addUser'


export const store = configureStore({
  reducer: {
    users: userReducer,
  }
});