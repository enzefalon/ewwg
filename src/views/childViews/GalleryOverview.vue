<template>
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
  name: "GalleryView"
};
</script>

<style lang="scss">
.galleryPreview {
  @include make-row();
}
.preview-card {
  @include vertical-spacing(false, true);
  @include make-col-ready();
  @include make-col(6);
  @include media-breakpoint-only($breakpoint-3col) {
    @include make-col(4);
  }
  @include media-breakpoint-up($breakpoint-4col) {
    @include make-col(3);
  }
}
</style>
