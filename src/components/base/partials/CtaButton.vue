<template>
  <link-element class="cta">
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
      default: "Text missing"
    },
    target: {
      type: String,
      default: "/"
    },
    elemclass: {
      type: String,
      default: ""
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
  @extend .d-inline-block;
  @extend .bold-1_5-primary;
  @extend .bg-theme1-primary;
  padding: 0.25em 0.85em;
  border-radius: 0.85em;
}
</style>
