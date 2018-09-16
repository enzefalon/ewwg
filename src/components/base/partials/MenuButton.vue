<template>
  <div class="menu-button" ref="menuBtn">
    <link-element v-on:click.native="toggleMenu">
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
    toggleMenu() {
      if (this.$refs && this.$refs.menuBtn && this.$refs.menuBtn.classList) {
        if (!this.$refs.menuBtn.classList.contains("active")) {
          this.$refs.menuBtn.classList.add("active");
        } else {
          this.$refs.menuBtn.classList.remove("active");
        }
      }
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
  &.active {
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
}
</style>
