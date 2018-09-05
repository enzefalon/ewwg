<template>
  <div class="input-complete" ref="inputContainer">
    <div class="label-input">
      <input
        ref="inputField"
        :disabled="disabledInput"
        :reuqired="requiredInput"
        @focus="onInputFocus"
        @blur="onInputBlur"
        class="text-input"
        :type="type"
        :id="idInput"
        :name="name"
        autocomplete="username"
        spellcheck="false"
        autocapitalize="none"
        :aria-label="labelInput"/>
      <div class="label" aria-hidden="true" v-text="labelInput"></div>
    </div>
    <div class="line-basic"></div>
    <div class="line-ani" ref="aniLine"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    labelInput: {
      type: String,
      default: "E-Mail oder Username"
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
      default: "username"
    },
    idInput: {
      type: String,
      default: "user"
    },
    disabledInput: {
      type: Boolean,
      default: false
    },
    requiredInput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onInputFocus() {
      console.log(this.$refs.inputContainer);
      if (
        this.$refs &&
        this.$refs.aniLine &&
        this.$refs.aniLine.classList &&
        !this.$refs.aniLine.classList.contains("active")
      ) {
        this.$refs.aniLine.classList.add("active");
      }
    },
    onInputBlur() {
      if (
        this.$refs &&
        this.$refs.aniLine &&
        this.$refs.aniLine.classList &&
        this.$refs.aniLine.classList.contains("active")
      ) {
        this.$refs.aniLine.classList.remove("active");
      }
      // TODO: check if input has value => new css rule for label to not come down if positive
      console.log(this.$refs.inputField.value);
    }
  },
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
      width: 100%;
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
      color: theme-color($theme-colors-1, "tertiary");
      position: absolute;
      bottom: 3px;
      left: 0;
      width: 100%;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: color, bottom, transform;
      transform-origin: bottom left;
    }
    .text-input:not([disabled]):focus ~ .label {
      color: theme-color($theme-colors-1, "primary");
      transform: scale(0.75) translateY(-39px);
    }
  }
  .line-basic {
    @extend .bg-theme1-tertiary;
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
    @extend .bg-theme1-primary;
    transform: scaleX(0);
    bottom: -2px;
    height: 2px;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    transition: transform 0.48s cubic-bezier(0.4, 0, 0.2, 1);
    &.active {
      transform: scaleX(1);
    }
  }
}
</style>
