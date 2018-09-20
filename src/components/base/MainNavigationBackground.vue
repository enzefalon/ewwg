<script>
import Config from "@/assets/js/Config";

export default {
  components: {},
  props: {
    gridCols: {
      type: Number,
      default: Config.GRID_COLS
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  render: function(createElement) {
    return createElement(
      "div",
      {
        class: "nav-bg"
      },
      Array.apply(null, { length: this.gridCols }).map(function() {
        return createElement("div", {
          class: "nav-bg-segment"
        });
      })
    );
  },
  name: "MainNavigationBackground"
};
</script>

<style lang="scss">
.nav-bg {
  @include make-row();
  width: 100%;
  height: 100%;
}
.nav-bg-segment {
  @extend .d-none;
  @include transition();
  @include make-col-ready();
  @include make-col(1);
  padding: 0;
  @extend .bg-theme1-primary;
}
/*.nav-bg {
  @extend .d-none;
  @include transition();
  @include make-col-ready();
  @include make-col(11);
  @include media-breakpoint-up($breakpoint-4col) {
    @include make-col(10);
  }
  @extend .bg-theme1-primary;
}*/

.theme-2 .nav-bg-segment {
  @extend .bg-theme2-primary;
}

.theme-3 .nav-bg-segment {
  @extend .bg-theme3-primary;
}

.mainnav-active .nav-bg-segment {
  @extend .d-block;
}
</style>
