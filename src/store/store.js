import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/user';
import { tracksApi } from '../services/tracks';
import { selectionsApi } from '../services/selections';
import { favoritesApi } from '../services/favorites';
import authReducer from './slices/auth';
import trackReducer from './slices/tracks';

export const store = configureStore({
  reducer: {
    trackId: trackReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [selectionsApi.reducerPath]: selectionsApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(tracksApi.middleware)
      .concat(selectionsApi.middleware)
      .concat(favoritesApi.middleware),
});
