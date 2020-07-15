import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    counter(state) {
      return "counter: " + state.counter;
    },
  },
  mutations: {
    INCREMENT(state, amount) {
      state.counter += amount;
    },
    DECREMENT(state, amount) {
      state.counter -= amount;
    },
  },
  actions: {
    onIncrement({ commit }) {
      commit("INCREMENT", 1);
    },
    onDecrement({ commit }) {
      commit("DECREMENT", 1);
    },
  },
  modules: {},
});
