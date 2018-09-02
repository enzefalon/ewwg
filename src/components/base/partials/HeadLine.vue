<template>
  <h1 v-text="content">Testtext</h1>
</template>

<script>
export default {
  components: {},
  props: {
    content: {
      type: String,
      default: ""
    },
    cssClass: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "h1"
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "HeadLine"
};
</script>

<style lang="scss">
</style>
