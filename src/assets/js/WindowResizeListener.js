export default class WindowResizeListener {
  constructor(storeInstance, delay = 240, breakPoint = 769) {
    this.store = storeInstance;
    this.rAFID = null;
    this.delay = delay;
    this.breakPoint = breakPoint;
    this.isMobile = null;
    this.initWindowResizeHandler();
  }

  initWindowResizeHandler() {
    this.setStart();
    this.step();
    window.addEventListener("resize", () => {
      this.stopTimer();
      this.rAFID = window.requestAnimationFrame(() => this.step());
    });
  }

  step() {
    let timestamp = window.mozAnimationStartTime || Date.now();
    let progress = timestamp - this.start;
    if (progress > this.delay) {
      this.setStart();
      this.getDimensions();
    }
  }

  getDimensions() {
    if (window.innerWidth < this.breakPoint) {
      if (this.isMobile !== true) {
        this.isMobile = true;
        this.store.commit("isMobile", true);
      }
    } else {
      if (this.isMobile === true) {
        this.isMobile = false;
        this.store.commit("isMobile", false);
      }
    }
  }

  setStart() {
    this.start = window.mozAnimationStartTime || Date.now();
  }

  stopTimer() {
    window.cancelAnimationFrame(this.rAFID);
  }
}
