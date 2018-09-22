import MUTATIONS from "@/assets/js/mutation-types";

//TODO: try to hunt down bug with for loop

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
    window.addEventListener("resize", () => {
      this.stopTimer();
      this.rAFID = window.requestAnimationFrame(() => this.step());
    });
    this.setStart();
    this.getDimensions();
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
    /*const windowWidth = window.innerWidth;
    let i = this.breakPointArray.length - 1;
    for (; i > -1; i--) {
      let j = i - -1;
      if (windowWidth >= this.breakPointArray[i]) {
        if (this.activeBreakPoint !== j) {
          return this.commitToStore(j);
        }
      }
    }
    if (this.activeBreakPoint !== 0) {
      return this.commitToStore(0);
    }*/
    if (window.innerWidth >= this.breakPointArray[1]) {
      if (this.activeBreakPoint !== 2) {
        this.commitToStore(2);
      }
    } else if (window.innerWidth >= this.breakPointArray[0]) {
      if (this.activeBreakPoint !== 1) {
        this.commitToStore(1);
      }
    } else if (this.activeBreakPoint !== 0) {
      this.commitToStore(0);
    }
  }

  commitToStore(payload) {
    this.activeBreakPoint = payload;
    return this.store.commit(MUTATIONS.ACTIVE_BREAKPOINT, payload);
  }

  setStart() {
    this.start = window.mozAnimationStartTime || Date.now();
  }

  stopTimer() {
    window.cancelAnimationFrame(this.rAFID);
  }
}
