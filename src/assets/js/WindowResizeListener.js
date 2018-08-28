export default class WindowResizeListener {

  constructor(routerInstance, delay = 250) {
    this.router = routerInstance;
    this.timeout = false;
    this.delay = delay;
    this.initWindowResizeHandler();
  }

  initWindowResizeHandler() {
    window.addEventListener("resize", () => {
      this.stopTimer();
      this.timeout = setTimeout(() => this.getDimensions(), this.delay)
    });
    this.getDimensions();
  }

  getDimensions() {
    if (window.innerWidth < 769) {
      this.router.app.$emit("windowResized", true);
    } else {
      this.router.app.$emit("windowResized", false);
    }
  }

  stopTimer() {
    clearTimeout(this.timeout);
  }
}
