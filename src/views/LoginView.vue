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
        <general-button
          :content="'Einloggen'"
          :tabIndex="3"
          :link-target="'/gallery'"
          class="login-cta" />
      </form>
    </div>
  </div>
</template>

<script>
import GeneralButton from "@/components/base/partials/GeneralButton";
import InputElement from "@/components/base/partials/InputElement";

export default {
  components: { GeneralButton, InputElement },
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
.login-cta {
  float: right;
  @include vertical-spacing(false, true);
}
</style>
