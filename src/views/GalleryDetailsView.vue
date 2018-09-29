<template>
  <div class="mainViewContainer">
    <!--<media-preview :media-path="getTemporaryPath" class="media-detail"/>-->
    <div class="details-content-wrapper">
      <head-line
        :content-headline="getRandomHead"
        :type-headline="'h2'"
        class="bold-1_5-primary details-hl" />
      <p class="medium-1-light preview-desc" v-text="getRandomText" />
    </div>
  </div>
</template>

<script>
import MediaPreview from "@/components/base/partials/MediaPreview";
import HeadLine from "@/components/base/partials/HeadLine";

export default {
  components: { MediaPreview, HeadLine },
  props: {},
  data() {
    return {
      baseUrl: process.env.BASE_URL
    };
  },
  computed: {
    getTemporaryPath() {
      return this.baseUrl + `img/base/demo_16by9.png`;
    },
    getRandomHead() {
      let rand = Math.ceil(Math.random() * 2);
      let out = "Lorem ipsum dolor";
      return rand > 1 ? out + " " + out : out;
    },
    getRandomText() {
      let rand = Math.ceil(Math.random() * 4);
      let out = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      return rand > 1 ? out + " " + out : out;
    }
  },
  methods: {},
  name: "GalleryDetailsView"
};
</script>

<style lang="scss">
.media-detail {
  @include vertical-spacing-half(false, true);
  margin-left: -($grid-gutter-width / 2);
  margin-right: -($grid-gutter-width / 2);
  padding-right: $border-base-width;
}
</style>
