<template>
  <div class="single-comment">
    <user-details class="details-user"></user-details>
    <p class="medium-1-light preview-desc" v-text="getRandomText" />
  </div>
</template>

<script>
import UserDetails from "@/components/base/partials/UserDetails";
export default {
  components: { UserDetails },
  props: {},
  data() {
    return {};
  },
  computed: {
    getRandomText() {
      let rand = Math.ceil(Math.random() * 4);
      let out = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      return rand > 1 ? out + " " + out : out;
    }
  },
  methods: {},
  name: "UserComment"
};
</script>

<style lang="scss">
</style>
