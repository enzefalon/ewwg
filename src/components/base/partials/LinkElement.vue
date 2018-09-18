<template>
  <router-link :to="linkTarget" :class="getElementClass">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  components: {},
  props: {
    linkTarget: {
      type: String,
      default: ""
    },
    elemClass: {
      type: String,
      default: ""
    },
    hoverActive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
    getElementClass() {
      return this.hoverActive
        ? this.elemClass + " hover-active"
        : this.elemClass;
    }
  },
  methods: {},
  name: "LinkElement"
};
</script>

<style lang="scss">
.hover-active {
  &:hover,
  &focus {
    color: theme-color($theme-colors-1, "tertiary");
  }
}
.theme-2 {
  .hover-active {
    &:hover,
    &focus {
      color: theme-color($theme-colors-2, "tertiary");
    }
  }
}
.theme-3 {
  .hover-active {
    &:hover,
    &focus {
      color: theme-color($theme-colors-3, "tertiary");
    }
  }
}
.mainnav-active {
  .hover-active,
  .theme-2 .hover-active,
  .theme-3 .hover-active {
    color: $body-bg;
    &:hover,
    &focus {
      color: theme-color($theme-colors-1, "dark");
    }
  }
}
</style>
