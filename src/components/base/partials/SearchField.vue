<template>
  <form>
    <input-element
      :label-input="'Suchbegriff'"
      :type-input="'text'"
      :borders-input="false"
      :name-input="'searchfield'"
      :id-input="'search'"
      :required-input="true"
      :icon-input="'icon-search'"
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
