<template>
  <div class="site-navigation">
    <background-lines class="mainnav-bg" :is-inverted="true" />
    <main-navigation-nav-points @toggleMenu="toggleMenu" />
    <main-navigation-toggle @toggleMenu="toggleMenu" />
  </div>
</template>

<script>
import BackgroundLines from "@/components/base/BackgroundLines";
import MainNavigationToggle from "@/components/base/MainNavigationToggle";
import MainNavigationNavPoints from "@/components/base/MainNavigationNavPoints";
import DOMElemClassAdder from "@/assets/js/DOMElemClassAdder";

export default {
  components: {
    BackgroundLines,
    MainNavigationToggle,
    MainNavigationNavPoints
  },
  props: {},
  data() {
    return {
      navClassBody: new DOMElemClassAdder(document.body)
    };
  },
  computed: {},
  methods: {
    toggleMenu() {
      if (!this.navClassBody.hasClass("mainnav-active")) {
        this.navClassBody.addClassToElement("mainnav-active");
      } else {
        this.navClassBody.removeClassFromElement("mainnav-active");
      }
    }
  },
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
