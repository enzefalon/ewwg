<template>
  <div class="mainView">
    <div class="mainViewContainer">
      <div class="galleryPreview no-gutters">
        <div class="col-6 col-md-3 pr">
          <media-preview :media-path="getTemporaryPath"/>
        </div>
        <div class="col-6 col-md-3 pr">
          <media-preview :media-path="getTemporaryPath"/>
        </div>
        <div class="col-6 col-md-3 pr">
          <media-preview :media-path="getTemporaryPath"/>
        </div>
        <div class="col-6 col-md-3 pr">
          <media-preview :media-path="getTemporaryPath"/>
        </div>
      </div>
    </div>
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
  name: "GalleryOverview"
};
</script>

<style lang="scss">
.galleryPreview {
  @include make-row();
  .pr {
    padding-right: 1px;
  }
}
</style>
