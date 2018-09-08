<template>
  <div class="site-footer">
    <copy-right></copy-right>
  </div>
</template>

<script>
import CopyRight from "@/components/base/CopyRight";

export default {
  components: { CopyRight },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "SiteFooter"
};
</script>

<style lang="scss">
.site-footer {
  @include make-row();
  @include vertical-spacing(false, true);
}
</style>
