<template>
  <router-link :to="linkTarget" :class="getElementClass" :exact="getExactLink">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  components: {},
  props: {
    linkTarget: {
      type: [String, Object],
      default: ""
    },
    elemClass: {
      type: String,
      default: ""
    },
    hoverActive: {
      type: Boolean,
      default: true
    },
    exactLink: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
    getElementClass() {
      return this.hoverActive ? this.elemClass + " hover-active" : this.elemClass;
    },
    getExactLink() {
      return this.exactLink;
    }
  },
  methods: {},
  name: "LinkElement"
};
</script>

<style lang="scss">
.hover-active {
  &:hover,
  &:active {
    color: theme-color($theme-colors-1, "tertiary");
  }
}
.theme-2 {
  .hover-active {
    &:hover,
    &:active {
      color: theme-color($theme-colors-2, "tertiary");
    }
  }
}
.theme-3 {
  .hover-active {
    &:hover,
    &:active {
      color: theme-color($theme-colors-3, "tertiary");
    }
  }
}
.mainnav-active {
  .site-navigation {
    .hover-active {
      color: $body-bg;
      @include transition();
      transition-property: color;
      &.router-link-exact-active.navpoint,
      &:hover,
      &:active {
        color: theme-color($theme-colors-1, "dark");
      }
    }
  }
}
</style>
