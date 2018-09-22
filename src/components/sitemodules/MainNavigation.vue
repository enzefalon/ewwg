<template>
  <div class="site-navigation">
    <background-lines class="nav-bg" :is-inverted="true"></background-lines>
    <main-navigation-toggle></main-navigation-toggle>
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import MainNavigationToggle from "@/components/base/MainNavigationToggle";

export default {
  components: { BackgroundLines, MainNavigationToggle },
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
.nav-bg {
  @extend .d-none;
  opacity: 0;
  @include transition(opacity 1s ease-in);
}

.mainnav-active .nav-bg {
  @extend .d-flex;
  opacity: 1;
}
</style>
