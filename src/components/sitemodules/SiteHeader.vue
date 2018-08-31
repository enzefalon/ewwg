<template>
  <div class="site-header">
    <logo-container></logo-container>
    <bread-crumb></bread-crumb>
  </div>
</template>

<script>
import LogoContainer from "@/components/base/LogoContainer";
import BreadCrumb from "@/components/base/BreadCrumb";

export default {
  components: { LogoContainer, BreadCrumb },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "SiteHeader"
};
</script>

<style lang="scss">
.site-header {
  @include make-row();
  @include vertical-spacing(true);
}
</style>
