<template>
  <div id="app" class="theme-1">
    <background-lines></background-lines>
    <site-header></site-header>
    <menu-button v-if="!isLogin"></menu-button>
    <!-- TODO add ContentContainer -->
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import SiteHeader from "@/components/sitemodules/SiteHeader";
import SiteFooter from "@/components/sitemodules/SiteFooter";
import MenuButton from "@/components/base/partials/MenuButton";
import WindowResizeListener from "@/assets/js/WindowResizeListener";
import Config from "@/assets/js/Config";

export default {
  components: {
    BackgroundLines,
    SiteHeader,
    MenuButton,
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
