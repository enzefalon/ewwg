<template>
  <p class="copyright">&copy; 2018 Eva Winkler</p>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "CopyRight"
};
</script>

<style lang="scss">
.copyright {
  @include make-col-ready();
  @include make-col-offset(6);
  @include make-col(5);
  @include media-breakpoint-up(md) {
    @include make-col-offset(10);
    @include make-col(2);
  }
  text-align: right;
}
</style>
