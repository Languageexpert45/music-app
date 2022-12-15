import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from '../services/allTracksRTK';

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});