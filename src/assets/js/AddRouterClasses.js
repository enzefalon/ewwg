export default class AddRouterClasses {
  constructor(domElement) {
    this.domElement = domElement;
  }

  updateClassFromRoute(to, from) {
    let routeTargetClass = AddRouterClasses.getClassForRoute(to);
    let routeCurrentClass = AddRouterClasses.getClassForRoute(from);

    if (routeCurrentClass && routeCurrentClass !== routeTargetClass) {
      this.removeClassFromElement(routeCurrentClass);
    }

    if (routeTargetClass) {
      this.addClassToElement(routeTargetClass);
    }
  }

  removeClassFromElement(classStr) {
    if (this.domElement.classList.contains(classStr)) {
      this.domElement.classList.remove(classStr);
    }
  }

  addClassToElement(classStr) {
    if (!this.domElement.classList.contains(classStr)) {
      this.domElement.classList.add(classStr);
    }
  }

  static getClassForRoute(route) {
    return route.meta ? route.meta.bodyClass : route.name;
  }
}
