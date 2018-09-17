export default class DOMElemClassAdder {
  constructor(domElement) {
    this.domElement = domElement;
  }

  updateClassFromRoute(to, from) {
    let routeTargetClass = DOMElemClassAdder.getClassForRoute(to);
    let routeCurrentClass = DOMElemClassAdder.getClassForRoute(from);

    if (routeCurrentClass && routeCurrentClass !== routeTargetClass) {
      this.removeClassFromElement(routeCurrentClass);
    }

    if (routeTargetClass) {
      this.addClassToElement(routeTargetClass);
    }
  }

  removeClassFromElement(classStr) {
    if (this.hasClass(classStr)) {
      this.domElement.classList.remove(classStr);
    }
  }

  addClassToElement(classStr) {
    if (!this.hasClass(classStr)) {
      this.domElement.classList.add(classStr);
    }
  }

  hasClass(classStr) {
    return this.domElement.classList.contains(classStr);
  }

  static getClassForRoute(route) {
    return route.meta ? route.meta.bodyClass : route.name;
  }
}
