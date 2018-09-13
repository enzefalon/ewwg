<template>
  <link-element class="icon-btn" :link-target="linkTarget" :class="elemClass">
    <span class="icon-picture" :class="iconClass"></span>
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
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "IconButton"
};
</script>

<style lang="scss">
.icon-btn {
}
</style>
