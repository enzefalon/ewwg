<template>
  <div class="mainView">
    <div class="mainViewContainer">
      <div class="galleryFilter">
        <div class="preview-filter">
          <p>
            Filter:
            <icon-button :icon-class="'icon-picture'" />
            <icon-button :icon-class="'icon-video'" />
            <icon-button :icon-class="'icon-playlist'" />
          </p>
        </div>
        <div class="preview-sort">
          <p>
            Sortierung:
            <icon-button :icon-class="'icon-sort-name-up'" />
            <icon-button :icon-class="'icon-sort-name-down'" />
            <icon-button :icon-class="'icon-calendar'" />
          </p>
        </div>
      </div>
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
import IconButton from "@/components/base/partials/IconButton";

export default {
  components: { PreviewCard, IconButton },
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
.galleryFilter,
.galleryPreview {
  @include make-row();
}
.preview-filter,
.preview-sort,
.preview-card {
  @include vertical-spacing(false, true);
  @include make-col-ready();
  @include make-col(6);
  @include media-breakpoint-up(md) {
    @include make-col(3);
  }
}
.preview-filter,
.preview-sort {
  @extend .medium-1_5-primary;
  line-height: 40px;
  vertical-align: middle;
}
</style>
