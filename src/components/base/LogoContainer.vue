<template>
  <div class="logo-container">
    <span class="icon icon-logo"></span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "LogoContainer"
};
</script>

<style lang="scss">
.logo-container {
  @include make-col-ready();
  @include make-col-offset(1);
  @include make-col(2);
  @include media-breakpoint-up(md) {
    @include make-col-offset(0);
    @include make-col(1);
  }
  .icon-logo {
    @extend .bold-8-primary;
    font-weight: $font-weight-normal;
    line-height: 1px;
  }
}
</style>
