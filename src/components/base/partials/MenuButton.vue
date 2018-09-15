<template>
  <div class="menu-button">
    <link-element v-on:click.native="openMenu">
      <span class="hamburger"></span>
      <span class="menu-text">Menü</span>
    </link-element>
  </div>
</template>
<script>
import LinkElement from "@/components/base/partials/LinkElement";

export default {
  components: { LinkElement },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    openMenu() {
      console.log("OPEN MENU ....");
    }
  },
  name: "MenuButton"
};
</script>

<style lang="scss">
.menu-button {
  position: absolute;
  top: 50vh;
  left: ($grid-gutter-width / 2);
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
    &:after,
    &:before {
      content: "";
      position: absolute;
      width: 1px;
      height: $menu-button-height;
      top: 0;
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
    padding-left: $menu-button-height;
    vertical-align: top;
    font-size: $menu-button-height / 2;
    line-height: $menu-button-height;
  }
}
</style>
