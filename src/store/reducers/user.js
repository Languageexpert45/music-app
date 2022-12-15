import {USER} from '../actions/types/user';

// 1.
const initialState = {};
// 2.
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case USER: {
      // 4.
      const { active, login, password, token } = action.payload;

      // 5.
      return {
        ...state,
        active,
        login,
        password,
        token,
      };
    }

    default:
      return state;
  }
}