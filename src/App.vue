<template>
  <div id="app" class="theme-1">
    <background-lines></background-lines>
    <site-header></site-header>
    <!-- TODO add ContentContainer -->
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import SiteHeader from "@/components/sitemodules/SiteHeader";
import SiteFooter from "@/components/sitemodules/SiteFooter";
import WindowResizeListener from "@/assets/js/WindowResizeListener";
import Config from "@/assets/js/Config";

export default {
  components: {
    BackgroundLines,
    SiteHeader,
    SiteFooter
  },
  props: {},
  data() {
    return {
      resizeInstance: null
    };
  },
  computed: {},
  methods: {
    initResize() {
      this.resizeInstance = new WindowResizeListener(
        this.$store,
        Config.DELAY_WINDOW_RESIZE,
        Config.MOBILE_BREAKPOINT
      );
    }
  },
  mounted() {
    this.initResize();
  },
  name: "App"
};
</script>

<style lang="scss">
</style>
