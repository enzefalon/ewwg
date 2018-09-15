import Vue from "vue";
import Vuex from "vuex";
import MUTATIONS from "@/assets/js/mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    activeBreakpoint: 0
  },
  mutations: {
    [MUTATIONS.ACTIVE_BREAKPOINT](state, n) {
      state.activeBreakpoint = n;
    }
  },
  actions: {}
});
