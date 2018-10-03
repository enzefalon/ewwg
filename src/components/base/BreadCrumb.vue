<template>
  <div class="bread-crumb">
    <head-line
      :content-headline="getBreadcrump"
      :type-headline="'h1'"
    />
  </div>
</template>

<script>
import HeadLine from "@/components/base/partials/HeadLine";

export default {
  components: { HeadLine },
  props: {},
  data() {
    return {};
  },
  computed: {
    getBreadcrump() {
      return this.$route.meta.navPointName ? this.$route.meta.navPointName : "";
    }
  },
  methods: {},
  name: "BreadCrumb"
};
</script>

<style lang="scss">
.bread-crumb {
  @include make-col-ready();
  @include make-col-offset(2);
  @include make-col(6);
  @extend .bold-3-primary;
  text-align: right;
  @include media-breakpoint-up($breakpoint-3col) {
    text-align: left;
  }
  @include media-breakpoint-only($breakpoint-3col) {
    @include make-col-offset(1);
    @include make-col(3);
  }
  @include media-breakpoint-up($breakpoint-4col) {
    @include make-col-offset(1);
    @include make-col(2);
  }
}
</style>
