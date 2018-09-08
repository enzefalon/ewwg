<template>
  <router-link :to="linkTarget" :class="elemclass">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  components: {},
  props: {
    linkTarget: {
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
  name: "LinkElement"
};
</script>

<style lang="scss">
</style>
