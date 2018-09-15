<template>
  <div :class="getBorderClass" class="input-complete" ref="inputContainer">
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
        :name="nameInput"
        autocomplete="username"
        spellcheck="false"
        autocapitalize="none"
        :aria-label="labelInput"/>
      <div class="label" aria-hidden="true" v-text="labelInput"></div>
    </div>
    <div class="line-basic"></div>
    <div class="line-ani"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    labelInput: {
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
    nameInput: {
      type: String,
      default: ""
    },
    idInput: {
      type: String,
      default: ""
    },
    disabledInput: {
      type: Boolean,
      default: false
    },
    requiredInput: {
      type: Boolean,
      default: false
    },
    borders: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
    getBorderClass() {
      return this.borders ? "borders" : "";
    }
  },
  methods: {
    onInputFocus() {
      if (
        this.$refs &&
        this.$refs.inputContainer &&
        this.$refs.inputContainer.classList &&
        !this.$refs.inputContainer.classList.contains("active")
      ) {
        this.$refs.inputContainer.classList.add("active");
      }
    },
    onInputBlur() {
      if (
        this.$refs &&
        this.$refs.inputContainer &&
        this.$refs.inputContainer.classList &&
        this.$refs.inputContainer.classList.contains("active") &&
        this.$refs.inputField &&
        this.$refs.inputField.value === ""
      ) {
        this.$refs.inputContainer.classList.remove("active");
      }
    }
  },
  name: "InputElement"
};
</script>

<style lang="scss">
.input-complete {
  position: relative;
  display: flex;
  &.borders {
    @include vertical-spacing(false, true);
    @include vertical-padding(true, false);
  }
  .label-input {
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;
    .text-input {
      width: 100%;
      color: inherit;
      font-weight: inherit;
      letter-spacing: inherit;
      flex-grow: 1;
      flex-shrink: 1;
      background-color: transparent;
      border: none;
      display: block;
      height: 1.25em;
      line-height: 1.25em;
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
      bottom: 0;
      left: 0;
      width: 100%;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: color, bottom, transform;
      transform-origin: bottom left;
    }
  }
  .line-basic {
    @extend .bg-theme1-secondary;
    position: absolute;
    bottom: -2px;
    height: $border-base-width;
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
      border-bottom: $border-base-width solid inherit;
      pointer-events: none;
    }
  }
  .line-ani {
    @extend .bg-theme1-primary;
    transform: scaleX(0);
    bottom: -2px;
    height: 1px;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    transition: transform 0.48s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.input-complete.active {
  .label {
    color: inherit;
    transform: scale(0.5) translateY(-3em);
  }
  .line-ani {
    transform: scaleX(1);
  }
}

.theme-2 {
  .input-complete {
    .label {
      color: theme-color($theme-colors-2, "tertiary");
    }
    &.active .label {
      color: inherit;
    }
    .line-basic {
      @extend .bg-theme2-secondary;
    }
    .line-ani {
      @extend .bg-theme2-primary;
    }
  }
}
.theme-3 {
  .input-complete {
    .label {
      color: theme-color($theme-colors-3, "tertiary");
    }
    &.active .label {
      color: inherit;
    }
    .line-basic {
      @extend .bg-theme3-secondary;
    }
    .line-ani {
      @extend .bg-theme3-primary;
    }
  }
}
</style>
