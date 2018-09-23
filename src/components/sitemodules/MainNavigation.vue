<template>
  <div class="site-navigation">
    <background-lines class="mainnav-bg" :is-inverted="true" />
    <main-navigation-toggle />
    <main-navigation-nav-points />
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import MainNavigationToggle from "@/components/base/MainNavigationToggle";
import MainNavigationNavPoints from "@/components/base/MainNavigationNavPoints";

export default {
  components: {
    BackgroundLines,
    MainNavigationToggle,
    MainNavigationNavPoints
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "MainNavigation"
};
</script>

<style lang="scss">
.mainnav-bg {
  pointer-events: none;
}

.mainnav-active .mainnav-bg {
  pointer-events: all;
}
</style>
