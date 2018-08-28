<template>
  <div id="app" class="theme-1">
    <background-lines></background-lines>
    <site-header></site-header>
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import SiteHeader from "@/components/sitemodules/SiteHeader";

export default {
  components: { BackgroundLines, SiteHeader },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "App"
};
</script>

<style lang="scss">
</style>
