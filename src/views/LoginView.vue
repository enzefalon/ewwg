<template>
  <div class="mainView">
    <div class="mainViewContainer">
      <cta-button :content="'Einloggen'"></cta-button>
      <input-element></input-element>
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
