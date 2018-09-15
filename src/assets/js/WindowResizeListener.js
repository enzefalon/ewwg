import MUTATIONS from "@/assets/js/mutation-types";

export default class WindowResizeListener {
  constructor(storeInstance, delay = 240, breakPoints = []) {
    this.store = storeInstance;
    this.rAFID = null;
    this.delay = delay;
    this.breakPointArray = breakPoints;
    this.activeBreakPoint = null;
    this.initWindowResizeHandler();
  }

  initWindowResizeHandler() {
    this.setStart();
    this.step();
    this.getDimensions();
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
    if (window.innerWidth >= this.breakPointArray[1]) {
      if (this.activeBreakPoint !== 2) {
        this.activeBreakPoint = 2;
        this.store.commit(MUTATIONS.ACTIVE_BREAKPOINT, 2);
      }
    } else if (window.innerWidth >= this.breakPointArray[0]) {
      if (this.activeBreakPoint !== 1) {
        this.activeBreakPoint = 1;
        this.store.commit(MUTATIONS.ACTIVE_BREAKPOINT, 1);
      }
    } else if (this.activeBreakPoint !== 0) {
      this.activeBreakPoint = 0;
      this.store.commit(MUTATIONS.ACTIVE_BREAKPOINT, 0);
    }
  }

  setStart() {
    this.start = window.mozAnimationStartTime || Date.now();
  }

  stopTimer() {
    window.cancelAnimationFrame(this.rAFID);
  }
}
