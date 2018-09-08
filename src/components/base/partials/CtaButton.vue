<template>
  <link-element class="cta" :link-target="linkTarget">
    <span v-text="content"></span>
  </link-element>
</template>
<script>
import LinkElement from "@/components/base/partials/LinkElement";

export default {
  components: { LinkElement },
  props: {
    content: {
      type: String,
      default: ""
    },
    linkTarget: {
      type: String,
      default: "/"
    },
    elemclass: {
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
  computed: {},
  methods: {},
  name: "CtaButton"
};
</script>

<style lang="scss">
.cta {
  @include vertical-spacing(false, true);
  @extend .d-inline-block;
  @extend .bold-1_5-primary;
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
</style>
