import MUTATIONS from "@/assets/js/mutation-types";

export default class ExtendedRouteInformation {
  constructor(maxEntries = 10, storeInstance = null) {
    this.maxEntries = maxEntries;
    this.store = storeInstance;
    this.routesInfo = [];
  }

  get useStore() {
    return Boolean(this.store);
  }

  get routeInfoLength() {
    return this.useStore ? this.store.getters.historyLength : this.routesInfo.length;
  }

  get lastHistoryEntry() {
    return this.useStore
      ? this.store.getters.lastHistoryEntry
      : this.routesInfo.length
        ? this.routesInfo[this.routesInfo.length - 1]
        : null;
  }

  get completeHistory() {
    return this.useStore ? this.store.getters.completeHistory : this.routesInfo;
  }

  addToRouteHistory(to) {
    if (this.useStore) {
      this.store.commit(MUTATIONS.ADD_TO_HISTORY, {
        entry: to,
        maxEntries: this.maxEntries
      });
    } else {
      if (this.routeInfoLength < this.maxEntries) {
        this.routesInfo.push(to);
      } else {
        this.routesInfo.shift();
        this.routesInfo.push(to);
      }
    }
  }
}
