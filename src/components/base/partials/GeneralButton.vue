<template>
  <link-element :link-target="linkTarget" :class="getComponentClass">
    <span v-if="buttonType==='icon-btn'" :class="iconClass"></span>
    <span v-text="content" v-else></span>
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
    content: {
      type: String,
      default: ""
    },
    linkTarget: {
      type: String,
      default: "/"
    },
    elemClass: {
      type: String,
      default: "bold-1_5-primary"
    },
    iconClass: {
      type: String,
      default: ""
    },
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    getComponentClass() {
      return this.buttonType + " " + this.elemClass;
    }
  },
  methods: {},
  name: "GeneralButton"
};
</script>

<style lang="scss">
.cta {
  @extend .d-inline-block;
  @extend .bg-theme1-primary;
  padding: 0.25em 0.85em;
  border-radius: 0.85em;
}
.theme-2 .cta {
  @extend .bg-theme2-primary;
}
.theme-3 .cta {
  @extend .bg-theme3-primary;
}
.icon-btn {
}
</style>
