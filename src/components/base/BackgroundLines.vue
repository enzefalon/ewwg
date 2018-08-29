<template>
  <div class="bg-lines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
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
    @include media-breakpoint-between(xs, sm) {
      &:first-child,
      &:nth-child(6),
      &:nth-child(11) {
        border-right: 1px solid;
      }
    }
    @include media-breakpoint-up(md) {
      &:nth-child(even) {
        border-right: 1px solid;
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
  @include media-breakpoint-up(md) {
    &:nth-child(4),
    &:nth-child(6),
    &:nth-child(8) {
      border-right: none;
    }
  }
}
.theme-2 .bg-lines .line {
  //border-color: $body-color-2;
}
.theme-3 .bg-lines .line {
  //border-color: $body-color-3;
}
</style>
