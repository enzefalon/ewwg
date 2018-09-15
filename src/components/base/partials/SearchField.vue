<template>
  <form>
    <input-element
      :labelInput="'Suchbegriff'"
      :type="'text'"
      :borders="false"
      :nameInput="'searchfield'"
      :idInput="'search'"
      :requiredInput="true"
      class="medium-1_5-primary"/>
  </form>
</template>

<script>
import InputElement from "@/components/base/partials/InputElement";
export default {
  components: { InputElement },
  props: {
    mediaPath: {
      type: String,
      default: ""
    },
    altText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "SearchField"
};
</script>

<style lang="scss">
</style>
