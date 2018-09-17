<template>
  <div class="site-navigation">
    <main-navigation-background></main-navigation-background>
    <main-navigation-toggle></main-navigation-toggle>
  </div>
</template>

<script>
import MainNavigationBackground from "@/components/base/partials/MainNavigationBackground";
import MainNavigationToggle from "@/components/base/partials/MainNavigationToggle";
export default {
  components: { MainNavigationBackground, MainNavigationToggle },
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
</style>
