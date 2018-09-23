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
    for (let i = this.breakPointArray.length - 1; i > -1; i--) {
      if (window.innerWidth >= this.breakPointArray[i]) {
        if (this.activeBreakPoint !== i) {
          this.commitToStore(i);
          return;
        }
        return;
      }
    }
  }

  commitToStore(payload) {
    this.activeBreakPoint = payload;
    this.store.commit(MUTATIONS.ACTIVE_BREAKPOINT, payload);
  }

  setStart() {
    this.start = window.mozAnimationStartTime || Date.now();
  }

  stopTimer() {
    window.cancelAnimationFrame(this.rAFID);
  }
}
