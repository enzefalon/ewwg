export default class ExtendedRouteInformation {
  constructor(storeInstance, maxEntries = 10) {
    this.store = storeInstance;
    this.maxEntries = maxEntries;
    this.routesInfo = [];
  }

  get routeInfoLength() {
    return this.routesInfo.length;
  }

  addToRouteHistory(to) {
    if (this.routeInfoLength < this.maxEntries) {
      this.routesInfo.push(to);
    } else {
      this.routesInfo.shift();
      this.routesInfo.push(to);
    }
    console.log(this.routesInfo);
  }
}
