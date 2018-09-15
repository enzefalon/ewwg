<template>
  <div class="bg-lines">
    <div class="line" v-for="n in gridCols" :key="n"></div>
  </div>
</template>

<script>
import Config from "@/assets/js/Config";
export default {
  props: {},
  data() {
    return {
      gridCols: Config.GRID_COLS
    };
  },
  computed: {},
  methods: {},
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
</style>
