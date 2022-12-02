import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from './reducers/musicApp'


export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  }
});