const trackSelector = (store) => store.tracks;

export const trackIdsSelector = (store) => trackSelector(store)?.allIds || [];

export const trackByIdSelector = (store, id) => {
  const todoStore = trackSelector(store);

  if (!todoStore) {
    return {};
  }
  
  const todoItem = todoStore.byIds[id];

  return {
    ...todoItem,
    id,
  };
}

export const tracksSelector = (store) =>
  trackIdsSelector(store).map((id) => trackByIdSelector(store, id));