import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from '../services/allTracksRTK';
import {addUser} from './slices/user';
import { addTrack } from "./slices/tracks";

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    user: addUser,
    tracks: addTrack,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});