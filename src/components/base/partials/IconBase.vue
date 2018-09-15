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
    widthIcon: {
      typeIcon: [Number, String],
      default: 100
    },
    heightIcon: {
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
      return "0 0 " + this.widthIcon + " " + this.heightIcon;
    }
  },
  name: "IconBase"
};
</script>

<style lang="scss">
svg {
  display: inline-block;
}
</style>
