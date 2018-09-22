import MUTATIONS from "@/assets/js/mutation-types";

export default class ExtendedRouteInformation {
  constructor(storeInstance, maxEntries = 10) {
    this.store = storeInstance;
    this.maxEntries = maxEntries;
    this.routesInfo = [];
  }

  get useStore() {
    return Boolean(this.store);
  }

  get routeInfoLength() {
    return this.useStore
      ? this.store.getters.historyLength
      : this.routesInfo.length;
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
