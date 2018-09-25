<template>
  <p class="copyright" v-text="getCopyRight"></p>
</template>

<script>
import Config from "@/assets/js/Config";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    getCopyRight() {
      return "© " + new Date().getFullYear() + " " + Config.NAME_TO_SHOW;
    }
  },
  methods: {},
  name: "CopyRight"
};
</script>

<style lang="scss">
.copyright {
  @include make-col-ready();
  @include make-col-offset(5);
  @include make-col(6);
  @include media-breakpoint-only($breakpoint-3col) {
    @include make-col-offset(8);
    @include make-col(3);
  }
  @include media-breakpoint-up($breakpoint-4col) {
    @include make-col-offset(9);
    @include make-col(3);
  }
  $map-copyright: (
    300px: 14px,
    breakpoint-min(sm): 15px,
    breakpoint-min(md): 12px,
    breakpoint-min(lg): 14px,
    breakpoint-min(xl): 16px,
    breakpoint-min(max): 18px
  );
  @include font-style(
    $font-family-base,
    $map-copyright,
    $line-height-base,
    $font-weight-medium,
    inherit
  );
  text-align: right;
}
.gallery-details,
.login {
  .copyright {
    @include media-breakpoint-up($breakpoint-3col) {
      @include make-col-offset(9);
      @include make-col(3);
    }
  }
}
</style>
