import { ADD_USER} from '../actions/types/addUser';

// 1.
const initialState = {
  allIds: [],
  byIds: {},
};


// 2.
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case ADD_USER: {
      // 4.
      const { id, login, password, token } = action.payload;

      // 5.
      return {
        ...state,

        allIds: [...state.allIds, id],
        
        byIds: {
          ...state.byIds,

          [id]: {
            login,
            password,
            token,
          },
        },
      };
    }

    default:
      return state;
  }
}