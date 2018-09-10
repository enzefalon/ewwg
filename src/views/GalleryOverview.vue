<template>
  <div class="mainView">
    <div class="mainViewContainer">
      <div class="galleryPreview">
        <div class="preview-card">
          <preview-card
            :media-path="getTemporaryPath"/>

        </div>
        <div class="preview-card">
          <preview-card
            :media-path="getTemporaryPath"/>
        </div>
        <div class="preview-card">
          <preview-card
            :media-path="getTemporaryPath"/>
        </div>
        <div class="preview-card">
          <preview-card
            :media-path="getTemporaryPath"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewCard from "@/components/base/PreviewCard";

export default {
  components: { PreviewCard },
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
  name: "GalleryOverview"
};
</script>

<style lang="scss">
.galleryPreview {
  @include make-row();
  .preview-card {
    @include vertical-spacing(false, true);
    @include make-col-ready();
    @include make-col(6);
    @include media-breakpoint-up(md) {
      @include make-col(3);
    }
  }
}
</style>
