import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../services/user';

const initialState = {
  id: '',
};


export const trackIdSlice = createSlice({
  name: 'trackId',
  initialState,
  reducers: {
    trackId: (state, { payload }) => {
      if (payload) {
        const { id } = payload;
        if (id) {
          state.id = id;
        }
      }
    },
  },
});

export const { trackId } = trackIdSlice.actions;
export default trackIdSlice.reducer;
