<template>
  <link-element :link-target="linkTarget" :class="getComponentClass" :hover-active="getHoverState">
    <span v-if="buttonType==='icon-btn'" :class="iconClass"></span>
    <span v-text="contentButton" v-else></span>
  </link-element>
</template>
<script>
import LinkElement from "@/components/base/partials/LinkElement";

export default {
  components: { LinkElement },
  props: {
    buttonType: {
      type: String,
      default: "cta"
    },
    contentButton: {
      type: String,
      default: ""
    },
    linkTarget: {
      type: String,
      default: "/"
    },
    elemClass: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    },
    tabIndex: {
      type: Number,
      default: 0
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
    getComponentClass() {
      return this.buttonType + " " + this.elemClass;
    },
    getHoverState() {
      return !this.hoverActive ? this.hoverActive : this.buttonType === "icon-btn";
    }
  },
  methods: {},
  name: "GeneralButton"
};
</script>

<style lang="scss">
.cta {
  @extend .d-inline-block;
  @extend .button-theme1-primary;
  padding: 0.25em 0.85em;
  border-radius: 0.85em;
}
.theme-2 .cta {
  @extend .button-theme2-primary;
}
.theme-3 .cta {
  @extend .button-theme3-primary;
}
</style>
