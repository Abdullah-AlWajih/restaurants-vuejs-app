import { createStore } from "vuex";
import router from "@/router/index";

const state = {};
const getters = {};
const mutations = {
  redirectTo(state, payload) {
    router.push({ name: payload }).then(() => {});
  },
};
const actions = {
  redirectTo({ commit }, payload) {
    commit("redirectTo", payload.value);
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
