import { createStore } from "vuex";
import { categories } from "./categories";
import { sort } from "./sort";
import { cart } from "./cart";

export default createStore({
  state: {
    pizzas: [],
  },
  mutations: {
    GET_PIZZAS(state, pizzasFromBackend) {
      state.pizzas = pizzasFromBackend;
    },
  },
  actions: {
    async getPizzas({ commit }) {
      const response = await fetch("http://localhost:3000/pizzas");
      const json = await response.json();
      commit("GET_PIZZAS", json);
    },

    async getFilteredPizzas({ commit, state }, categoryId) {
      let query = "";

      if (state.sort.sortBy) query = `?category=${categoryId}&_sort=${state.sort.sortBy.key}`;
      if (!state.sort.sortBy) query = `?category=${state.sort.sortBy.key}`;
      if (!categoryId && categoryId !== 0) query = "";

      const response = await fetch(`http://localhost:3000/pizzas${query}`);
      const json = await response.json();
      commit("SET_CATEGORY", categoryId);
      commit("GET_PIZZAS", json);
    },

    async getSortedPizzas({ commit, state }, sortBy) {
      let query = "";

      if (state.category)
        query = `?category=${state.category}&_sort=${sortBy.key}`;
      if (!state.category) query = `?_sort=${sortBy.key}`;

      const response = await fetch(`http://localhost:3000/pizzas${query}`);
      const json = await response.json();
      commit("GET_PIZZAS", json);
      commit("SET_SORT_BY", sortBy);
    },
  },
  modules: {
    categories,
    sort,
    cart
  },
});
