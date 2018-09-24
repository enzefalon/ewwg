<template>
  <div id="app" class="theme-1">
    <background-lines></background-lines>
    <main-content-container>
      <router-view></router-view>
    </main-content-container>
    <site-footer></site-footer>
    <main-navigation v-if="!isLogin"></main-navigation>
    <site-header></site-header>
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import MainContentContainer from "@/components/sitemodules/MainContentContainer";
import SiteFooter from "@/components/sitemodules/SiteFooter";
import MainNavigation from "@/components/sitemodules/MainNavigation";
import SiteHeader from "@/components/sitemodules/SiteHeader";
import WindowResizeListener from "@/assets/js/WindowResizeListener";
import Config from "@/assets/js/Config";

export default {
  components: {
    BackgroundLines,
    MainContentContainer,
    SiteFooter,
    MainNavigation,
    SiteHeader
  },
  props: {},
  data() {
    return {
      resizeInstance: null
    };
  },
  computed: {
    isLogin() {
      return this.$route && this.$route.name ? this.$route.name === "login" : false;
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
