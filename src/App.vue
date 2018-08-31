<template>
  <div id="app" class="theme-1">
    <background-lines></background-lines>
    <site-header></site-header>
    <site-footer></site-footer>
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import SiteHeader from "@/components/sitemodules/SiteHeader";
import SiteFooter from "@/components/sitemodules/SiteFooter";

export default {
  components: { BackgroundLines, SiteHeader, SiteFooter },
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
