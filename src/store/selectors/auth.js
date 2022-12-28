const baseAuthSelector = (store) => store.auth;
const baseTracksSelector = (store) => store.tracks
export const isLoggedInSelector = (store) => baseAuthSelector(store).isLoggedIn;
export const authErrorsSelector = (store) => baseAuthSelector(store).errors;
