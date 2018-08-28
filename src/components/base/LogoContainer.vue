<template>
  <div class="logo-container">
    <icon-base width="240" height="240">
      <logo-vector></logo-vector>
    </icon-base>
  </div>
</template>

<script>
import IconBase from "@/components/base/IconBase";
import LogoVector from "@/components/svg/LogoVector";

export default {
  components: { IconBase, LogoVector },
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
}
</style>
