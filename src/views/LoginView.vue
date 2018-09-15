<template>
  <div class="mainView">
    <div class="mainViewContainer">
      <form>
        <input-element
          :label-input="'E-Mail oder Username'"
          :type-input="'text'"
          :tab-index="1"
          :name-input="'user'"
          :id-input="'username'"
          :required-input="true"
          class="bold-2_25-primary"/>
        <input-element
          :label-input="'Passwort'"
          :type-input="'password'"
          :tab-index="2"
          :name-input="'password'"
          :id-input="'pass'"
          :required-input="true"
          class="bold-2_25-primary"/>
        <general-button
          :content-button="'Einloggen'"
          :elem-class="'bold-1_5-primary'"
          :tab-index="3"
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
