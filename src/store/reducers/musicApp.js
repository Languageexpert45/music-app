import { ADD_TRACK, FILTER_TRACK, DELETE_TRACK } from '../actions/types/musicApp';


const initialState = {
  allIds: [],
  byIds: {},
};



export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case ADD_TRACK: {
      // 4.
      const { id, content } = action.payload;

      // 5.
      return {
        ...state,

        allIds: [...state.allIds, id],
        
        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    case FILTER_TRACK: {
      const { id } = action.payload;

      const targetTrack = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTrack,
            completed: !targetTrack.completed,
          },
        },
      };

    }


    case DELETE_TRACK: {
      const { id } = action.payload;

      const targetTrack = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTrack,
            completed: !targetTrack.completed,
          },
        },
      };

    }

    default:
      return state;
  }
}