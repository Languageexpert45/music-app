import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../services/user';

const initialState = {
  access: '',
  isLoggedIn: false,
  
};

const storeTokens = (state, { payload }) => {
  const { access, refresh } = payload;
  if (!access) {
    return;
  }
  state.access = access;
  state.isLoggedIn = true;
   if (refresh) {
     localStorage.setItem('tokenRefresh', refresh);
   }
};

export const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {
    tokenReceived: (state, {payload}) => {
      if (payload) {
        const { access, refresh } = payload;
        if(access) {state.access = access};
        if (access) {
          localStorage.setItem('isLoggedIn', true);
        }
        if (refresh) {localStorage.setItem('tokenRefresh', refresh)};
        state.isLoggedIn = true;
      } 
    },
    logOut: (state) => {
      state.access = initialState.access
      state.isLoggedIn = initialState.isLoggedIn
      localStorage.removeItem('tokenRefresh');
      localStorage.removeItem('isLoggedIn');
    },
    },
    extraReducers: (builder) => {
      builder.addMatcher(userApi.endpoints.refresh.matchFulfilled, storeTokens);
    }
})

export const { tokenReceived, logOut } = authSlice.actions;
export default authSlice.reducer;
