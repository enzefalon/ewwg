<template>
  <div class="mainView">
    <div class="mainViewContainer">
      <cta-button :content="'Einloggen'"></cta-button>
    </div>
  </div>
</template>

<script>
import CtaButton from "@/components/base/partials/CtaButton";

export default {
  components: { CtaButton },
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
