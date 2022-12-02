import { ADD_TRACK, FILTER_TRACK, DELETE_TRACK } from "../types/musicApp";


let nextTrackId = 0;

export const addTrack = (content) => ({
  type: ADD_TRACK,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const filterTrack = (name) => ({
  type: FILTER_TRACK,
  payload: {name},
});

export const deleteTrack = (name) => ({
  type: DELETE_TRACK,
  payload: {name},
});