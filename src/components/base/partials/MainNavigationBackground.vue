<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  render: function(createElement) {
    return createElement("div", {
      class: "nav-bg"
    });
  },
  name: "MainNavigationBackground"
};
</script>

<style lang="scss">
.nav-bg {
  @extend .d-none;
  @include transition();
  @include make-col-ready();
  @include make-col(11);
  @include media-breakpoint-up($breakpoint-4col) {
    @include make-col(10);
  }
  @extend .bg-theme1-primary;
}

.theme-2 .nav-bg {
  @extend .bg-theme2-primary;
}

.theme-3 .nav-bg {
  @extend .bg-theme3-primary;
}

.mainnav-active .nav-bg {
  @extend .d-block;
}
</style>
