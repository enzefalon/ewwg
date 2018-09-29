<script>
import LinkElement from "@/components/base/partials/LinkElement";
import HeadLine from "@/components/base/partials/HeadLine";
import RandomKeys from "@/assets/js/RandomKeys";

export default {
  components: { LinkElement, HeadLine },
  props: {},
  data() {
    return {};
  },
  computed: {
    getNavPoints() {
      if (this.$router && this.$router.options && this.$router.options.routes) {
        return this.$router.options.routes.filter(route => {
          return route.meta && route.meta.isMainNav && route.meta.navPointName;
        });
      }
      return [];
    }
  },
  methods: {},
  render: function(createElement) {
    return createElement(
      "div",
      {
        class: "mainnav-navpoints"
      },
      [
        createElement(
          "div",
          {
            class: "placeholder-header"
          },
          [
            createElement("span", {
              domProps: {
                innerHTML: "&nbsp;"
              }
            })
          ]
        ),
        Array.apply(null, { length: this.getNavPoints.length }).map((item, index) => {
          return createElement(LinkElement, {
            props: {
              linkTarget: { name: this.getNavPoints[index].name }
            },
            scopedSlots: {
              default: () => {
                return createElement(HeadLine, {
                  props: {
                    contentHeadline: this.getNavPoints[index].meta.navPointName,
                    typeHeadline: "h2"
                  }
                });
              }
            },
            class: "navpoint",
            key: RandomKeys.generateId(20)
          });
        })
      ]
    );
  },
  name: "MainNavigationNavPoints"
};
</script>

<style lang="scss">
.mainnav-navpoints {
  pointer-events: all;
  @include make-row();
  @extend .bold-8-primary;
  @extend .d-none;
  width: 100vw;
  opacity: 0;
  align-content: flex-start;
  .placeholder-header,
  .navpoint {
    @include make-col-ready();
  }
  .placeholder-header {
    @include make-col(12);
    @include vertical-spacing(true);
  }
  .navpoint {
    @include make-col-offset(1);
    @include make-col(10);
    @include media-breakpoint-up($breakpoint-3col) {
      @include make-col-offset(2);
      @include make-col(9);
    }
    @include media-breakpoint-up($breakpoint-4col) {
      @include make-col-offset(2);
      @include make-col(10);
    }
  }
}
.mainnav-active .mainnav-navpoints {
  @extend .d-flex;
  opacity: 1;
}
</style>
