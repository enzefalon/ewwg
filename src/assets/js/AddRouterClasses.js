export default class AddRouterClasses {
  constructor(routerInstance) {
    this.routerInstance = routerInstance;
  }

  updateClassFromRoute(route) {
    var routeClass = this.getClassForRoute(route);
    let className = "";

    if (routeClass) {
      let routeBodyClass = routeClass.replace(/^!/, "");

      if (routeClass.indexOf("!") === 0) {
        className = " " + routeBodyClass;
      } else {
        className += " " + routeBodyClass;
      }
    }

    return className;
  }

  getClassForRoute(route) {
    return route.meta ? route.meta.bodyClass : route.name;
  }
}
