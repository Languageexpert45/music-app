import { ADD_USER} from "../types/types";


let nextUserId = 0;

export const addUser = (login, password, token) => ({
  type: ADD_USER,
  payload: {
    id: ++nextUserId,
    login,
    password,
    token,
  },
});