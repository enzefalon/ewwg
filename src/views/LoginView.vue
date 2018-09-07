<template>
  <div class="mainView">
    <div class="mainViewContainer">
      <form>
        <input-element
          :labelInput="'E-Mail oder Username'"
          :type="'text'"
          :tabIndex="1"
          :nameInput="'user'"
          :idInput="'username'"
          :requiredInput="true"
          class="bold-2_25-primary"/>
        <input-element
          :labelInput="'Passwort'"
          :type="'password'"
          :tabIndex="2"
          :nameInput="'password'"
          :idInput="'pass'"
          :requiredInput="true"
          class="bold-2_25-primary"/>
        <cta-button :content="'Einloggen'"></cta-button>
      </form>
    </div>
  </div>
</template>

<script>
import CtaButton from "@/components/base/partials/CtaButton";
import InputElement from "@/components/base/partials/InputElement";

export default {
  components: { CtaButton, InputElement },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "LoginView"
};
</script>

<style lang="scss">
</style>
