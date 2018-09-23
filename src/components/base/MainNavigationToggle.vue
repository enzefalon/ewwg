<template>
  <div class="mainnav-toggle" v-on:click.prevent.stop="toggleMenu">
    <link-element>
      <span class="hamburger"></span>
      <span class="toggle-text-open">Menü</span>
      <span class="toggle-text-close">Schließen</span>
    </link-element>
  </div>
</template>
<script>
import LinkElement from "@/components/base/partials/LinkElement";
import DOMElemClassAdder from "@/assets/js/DOMElemClassAdder";

export default {
  components: { LinkElement },
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
  name: "MainNavigationToggle"
};
</script>

<style lang="scss">
.mainnav-toggle {
  position: absolute;
  pointer-events: all;
  top: 50vh;
  left: ($grid-gutter-width / 2);
  transform: translateY(-50%);
  min-width: $menu-button-height;
  height: $menu-button-height;
  @include transition();
  transition-property: top, transform, left, color;
  .hamburger {
    position: relative;
    display: inline-block;
    left: $menu-button-height / 4;
    width: 0;
    height: $menu-button-height;
    border-left: $border-base-width solid;
    border-right: $border-base-width solid;
    @include transition();
    transition-property: border;
    &:after,
    &:before {
      @include transition();
      transition-property: transform;
      content: "";
      position: absolute;
      width: 1px;
      height: $menu-button-height;
      top: 0;
      transform-origin: center center;
    }
    &:before {
      left: $menu-button-height / 4;
      border-right: ($border-base-width * 2) solid;
    }
    &:after {
      right: $menu-button-height / 4;
      border-right: ($border-base-width * 2) solid;
    }
  }
  .toggle-text-close,
  .toggle-text-open {
    @extend .d-none;
    padding-left: $menu-button-height;
    vertical-align: top;
    font-size: $menu-button-height / 2;
    line-height: $menu-button-height;
  }
  .toggle-text-open {
    @extend .d-md-inline;
  }
}
.mainnav-active .mainnav-toggle {
  .hamburger {
    border-left: $border-base-width solid transparent;
    border-right: $border-base-width solid transparent;
    &:before {
      transform: rotate(-45deg)
        translate(-($menu-button-height / 5), -($menu-button-height / 5));
    }
    &:after {
      transform: rotate(45deg)
        translate(($menu-button-height / 5), -($menu-button-height / 5));
    }
  }
  .toggle-text-open {
    @extend .d-none;
  }
  .toggle-text-close {
    @extend .d-md-inline;
  }
}
</style>
