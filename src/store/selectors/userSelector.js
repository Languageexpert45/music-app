const userSelector = (store) => store.user;

export const userIdsSelector = (store) => userSelector(store)?.allIds || [];

export const userByIdSelector = (store, id) => {
  const userStore = userSelector(store);

  if (!userStore) {
    return {};
  }

  const userItem = userStore.byIds[id];

  return {
    ...userItem,
    id,
  };
};

export const usersSelector = (store) =>
  userIdsSelector(store).map((id) => userByIdSelector(store, id));