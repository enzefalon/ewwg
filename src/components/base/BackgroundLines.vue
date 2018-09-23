<script>
import Config from "@/assets/js/Config";
import RandomKeys from "@/assets/js/RandomKeys";

export default {
  props: {
    gridCols: {
      type: Number,
      default: Config.GRID_COLS
    },
    isInverted: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  render: function(createElement) {
    return createElement(
      "div",
      {
        class: "bg-lines"
      },
      Array.apply(null, { length: this.gridCols }).map(() => {
        return createElement("div", {
          class: "line" + (this.isInverted ? " inverted" : ""),
          key: RandomKeys.generateId(20)
        });
      })
    );
  },
  name: "BackgroundLines"
};
</script>

<style lang="scss">
.bg-lines {
  position: fixed;
  @include make-row();
  width: 100%;
  height: 100%;
  z-index: -1;
  .line {
    @include make-col-ready();
    @include make-col(1);
    padding: 0;
    border-color: inherit;
    @include transition();
    transition-property: border-color;
    @include media-breakpoint-between(xs, sm) {
      &:first-child,
      &:nth-child(6),
      &:nth-child(11) {
        border-right: $border-base-width solid;
      }
    }
    @include media-breakpoint-only($breakpoint-3col) {
      &:nth-child(3n + 2) {
        border-right: $border-base-width solid;
      }
    }
    @include media-breakpoint-up($breakpoint-4col) {
      &:nth-child(even) {
        border-right: $border-base-width solid;
      }
      &:last-child {
        border-right: none;
      }
    }
    &.inverted {
      border-color: transparent;
      background: $body-color-1-alpha-0;
      transition-property: background-color, border-color;
      @include media-breakpoint-up(xs) {
        &:last-child {
          display: none;
        }
      }
      @include media-breakpoint-up($breakpoint-4col) {
        &:nth-child(11) {
          display: none;
        }
      }
    }
  }
}
.login .bg-lines .line {
  &:nth-child(6) {
    border-right: none;
  }
  @include media-breakpoint-up($breakpoint-3col) {
    border-right: none;
    &:nth-child(2),
    &:nth-child(10) {
      border-right: $border-base-width solid;
    }
  }
}
.theme-2 .bg-lines .line.inverted {
  background: $body-color-2-alpha-0;
}
.theme-3 .bg-lines .line.inverted {
  background: $body-color-3-alpha-0;
}
.mainnav-active {
  .bg-lines .line.inverted {
    background: $body-color-1;
    border-color: $body-bg;
  }
  .theme-2 .bg-lines .line.inverted {
    background: $body-color-2;
  }
  .theme-3 .bg-lines .line.inverted {
    background: $body-color-3;
  }
}
</style>
