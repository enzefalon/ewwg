<template>
  <div class="input-complete">
    <div class="label-input">
      <input class="text-input" type="email" autocomplete="username" spellcheck="false" name="" autocapitalize="none" id="" aria-label="E-Mail oder Telefonnummer"/>
      <div class="label" aria-hidden="true">E-Mail oder Telefonnummer</div>
    </div>
    <div class="line-basic"></div>
    <div class="line-ani"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "InputElement"
};
</script>

<style lang="scss">
.input-complete {
  @include vertical-spacing(true, false);
  position: relative;
  display: flex;
  .label-input {
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;
    .text-input {
      color: inherit;
      flex-grow: 1;
      flex-shrink: 1;
      background-color: transparent;
      border: none;
      display: block;
      height: 24px;
      line-height: 24px;
      margin: 0;
      min-width: 0;
      outline: none;
      padding: 0;
      z-index: 0;
    }
    .label {
      pointer-events: none;
      position: absolute;
      bottom: 3px;
      left: 0;
      width: 100%;
    }
  }
  .line-basic {
    @extend .bg-theme1-primary;
    position: absolute;
    bottom: -2px;
    height: 1px;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: -2px;
      left: 0;
      right: 0;
      border-bottom: 1px solid inherit;
      pointer-events: none;
    }
  }
  .line-ani {
    transform: scaleX(0);
    @extend .bg-theme1-primary;
    bottom: -2px;
    height: 2px;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
  }
}
</style>
