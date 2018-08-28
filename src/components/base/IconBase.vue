<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="getViewBox" role="presentation">
    <g :fill="iconColor">
      <slot/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 100
    },
    height: {
      type: [Number, String],
      default: 100
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  },
  computed: {
    getViewBox() {
      return "0 0 " + this.width + " " + this.height;
    }
  },
  name: "IconBase"
};
</script>

<style scoped lang="scss">
svg {
  display: inline-block;
}
</style>
