import {USER} from "../types/user";


export const regUser = (active, login, password, token) => ({
  type: USER,
  payload: {
    active,
    login,
    password,
    token,
  },
});