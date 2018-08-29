<template>
  <div class="bread-crumb">
    <head-line></head-line>
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
  computed: {},
  methods: {},
  name: "BreadCrumb"
};
</script>

<style lang="scss">
.bread-crumb {
  @include make-col-ready();
  @include make-col(4);
  @include media-breakpoint-up(md) {
    @include make-col-offset(1);
    @include make-col(2);
  }
}
</style>
