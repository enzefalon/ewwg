<template>
  <div class="mainnav-toggle">
    <link-element v-on:click.native="toggleMenu">
      <span class="hamburger"></span>
      <span class="menu-text" v-text="getToggleText">Menü</span>
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
  computed: {
    getToggleText() {
      return !this.navClassBody.hasClass("mainnav-active")
        ? "Menü"
        : "Schließen";
    }
  },
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
  left: $grid-gutter-width;
  transform: translateY(-50%);
  height: $menu-button-height;
  @include transition();
  .hamburger {
    position: relative;
    display: inline-block;
    left: $menu-button-height / 4;
    width: 0;
    height: $menu-button-height;
    border-left: $border-base-width solid;
    border-right: $border-base-width solid;
    @include transition();
    &:after,
    &:before {
      content: "";
      position: absolute;
      width: 1px;
      height: $menu-button-height;
      top: 0;
      @include transition();
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
  .menu-text {
    @extend .d-none;
    @extend .d-md-inline;
    padding-left: $menu-button-height;
    vertical-align: top;
    font-size: $menu-button-height / 2;
    line-height: $menu-button-height;
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
}
</style>
