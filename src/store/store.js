import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/user";
import { tracksApi } from "../services/tracks";
import { selectionsApi } from "../services/selections";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [selectionsApi.reducerPath]: selectionsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(tracksApi.middleware)
      .concat(selectionsApi.middleware)
      
});