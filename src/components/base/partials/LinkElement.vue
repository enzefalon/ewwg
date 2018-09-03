<template>
  <router-link :to="target" :class="elemclass">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  components: {},
  props: {
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
  name: "LinkElement"
};
</script>

<style lang="scss">
</style>
