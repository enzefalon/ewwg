<template>
  <div id="app" class="theme-1">
    <background-lines></background-lines>
    <!-- TODO add ContentContainer -->
    <router-view></router-view>
    <site-footer></site-footer>
    <main-navigation v-if="!isLogin"></main-navigation>
    <site-header></site-header>
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import SiteHeader from "@/components/sitemodules/SiteHeader";
import SiteFooter from "@/components/sitemodules/SiteFooter";
import MainNavigation from "@/components/sitemodules/MainNavigation";
import WindowResizeListener from "@/assets/js/WindowResizeListener";
import Config from "@/assets/js/Config";

export default {
  components: {
    MainNavigation,
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
  computed: {
    isLogin() {
      return this.$route && this.$route.name
        ? this.$route.name === "login"
        : false;
    }
  },
  methods: {
    initResize() {
      this.resizeInstance = new WindowResizeListener(
        this.$store,
        Config.DELAY_WINDOW_RESIZE,
        Config.BREAKPOINTS
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
