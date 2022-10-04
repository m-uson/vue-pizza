export const sort = {
  state: () => ({
    sortBy: {
      key: "rating",
      label: "популярности",
    },
  }),
  mutations: {
    SET_SORT_BY(state, sortByItem) {
      state.sortBy = sortByItem;
    },
  },
  actions: {},
};