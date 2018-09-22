import Vue from "vue";
import Vuex from "vuex";
import MUTATIONS from "@/assets/js/mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    activeBreakpoint: 0,
    historyInfo: []
  },
  getters: {
    historyLength: state => {
      return state.historyInfo.length;
    },
    lastHistoryEntry: (state, getters) => {
      return getters.historyLength
        ? state.historyInfo[getters.historyLength - 1]
        : null;
    }
  },
  mutations: {
    [MUTATIONS.ACTIVE_BREAKPOINT](state, n) {
      state.activeBreakpoint = n;
      console.log("ACTIVE BREAKPOINT: ", Date.now());
    },
    [MUTATIONS.ADD_TO_HISTORY](state, payload) {
      if (state.historyInfo.length < payload.maxEntries) {
        state.historyInfo.push(payload.entry);
      } else {
        state.historyInfo.shift();
        state.historyInfo.push(payload.entry);
      }
    }
  },
  actions: {}
});
