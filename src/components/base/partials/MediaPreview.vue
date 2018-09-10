<template>
  <div>
    <div class="embed-responsive embed-responsive-16by9">
      <img class="embed-responsive-item" :src="mediaPath" :alt="altText">
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    mediaPath: {
      type: String,
      default: ""
    },
    altText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "MediaPreview"
};
</script>

<style lang="scss">
</style>
