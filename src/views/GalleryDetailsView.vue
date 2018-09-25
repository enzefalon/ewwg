<template>
  <div class="mainViewContainer">
    <media-preview :media-path="getTemporaryPath" class="media-detail"/>
  </div>
</template>

<script>
import MediaPreview from "@/components/base/partials/MediaPreview";
export default {
  components: { MediaPreview },
  props: {},
  data() {
    return {
      baseUrl: process.env.BASE_URL
    };
  },
  computed: {
    getTemporaryPath() {
      return this.baseUrl + `img/base/demo_16by9.png`;
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
