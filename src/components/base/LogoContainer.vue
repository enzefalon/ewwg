<template>
  <div class="logo-container">
    <general-button
      :link-target="'/'"
      :hover-active="false"
      :button-type="'icon-btn'"
      :icon-class="'icon-logo'"/>
  </div>
</template>

<script>
import GeneralButton from "@/components/base/partials/GeneralButton";

export default {
  components: { GeneralButton },
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
  @include media-breakpoint-up($breakpoint-3col) {
    @include make-col-offset(0);
    @include make-col(1);
  }
  .icon-logo {
    @extend .bold-8-primary;
    @include transition();
    font-weight: $font-weight-normal;
    line-height: 1px;
    padding: 0;
  }
}
</style>
