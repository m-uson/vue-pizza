export const cart = {
  state: () => ({
    items: {},
    allTotalCount: 0,
    allTotalPrice: 0,
  }),
  getters: {
    getTotalPrice(state) {
      return Object.values(state.items).reduce((total, pizza) => {
        return total + pizza.totalPrice;
      }, 0);
    },
    getTotalCount(state) {
        return Object.values(state.items).reduce((total, pizza) => {
          return total + pizza.totalCount;
        }, 0);
      },
  },
  mutations: {
    ADD_TO_CART(state, addedPizza) {
      const pizza = state.items[addedPizza.id];

      if (pizza) {
        const totalCount = pizza.totalCount + 1;
        const totalPrice = totalCount * addedPizza.price;

        state.items[addedPizza.id] = {
          pizza: addedPizza,
          totalCount,
          totalPrice,
        };
      } else {
        state.items[addedPizza.id] = {
          pizza: addedPizza,
          totalCount: 1,
          totalPrice: addedPizza.price,
        };
      }
    },
  },
  actions: {},
};
