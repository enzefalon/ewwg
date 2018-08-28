<template>
  <div class="site-header">
    <logo-container></logo-container>
  </div>
</template>

<script>
import LogoContainer from "@/components/base/LogoContainer";

export default {
  components: { LogoContainer },
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
  margin: 40px 0 0;
}
</style>
