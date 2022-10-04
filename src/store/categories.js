export const categories = {
  state: () => ({
    value: null,
  }),
  mutations: {
    SET_CATEGORY(state, categoryId) {
      state.value = categoryId;
    },
  },
  actions: {},
};
