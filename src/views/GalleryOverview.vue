<template>
  <div class="mainView">
    <div class="mainViewContainer">
      <div class="galleryFilter">
        <div class="preview-filter">
          <p>
            <span>Filtern:</span>
            <general-button
              :button-type="'icon-btn'"
              :icon-class="'icon-picture'"/>
            <general-button
              :button-type="'icon-btn'"
              :icon-class="'icon-video'"/>
            <general-button
              :button-type="'icon-btn'"
              :icon-class="'icon-playlist'"/>
          </p>
        </div>
        <div class="preview-sort">
          <p>
            <span>Sortieren:</span>
            <general-button
              :button-type="'icon-btn'"
              :icon-class="'icon-sort-name-up'"/>
            <general-button
              :button-type="'icon-btn'"
              :icon-class="'icon-sort-name-down'"/>
            <general-button
              :button-type="'icon-btn'"
              :icon-class="'icon-calendar'"/>
          </p>
        </div>
        <div class="preview-search">
          <search-field />
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
import GeneralButton from "@/components/base/partials/GeneralButton";
import SearchField from "@/components/base/partials/SearchField";

export default {
  components: { PreviewCard, GeneralButton, SearchField },
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
.preview-search,
.preview-filter,
.preview-sort,
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
.preview-search,
.preview-filter,
.preview-sort {
  @extend .medium-1_5-primary;
}
.preview-filter {
  order: 2;
  @include media-breakpoint-up($breakpoint-3col) {
    order: 1;
  }
}
.preview-sort {
  order: 3;
  @include media-breakpoint-up($breakpoint-3col) {
    order: 2;
  }
}
.preview-search {
  order: 1;
  @include make-col-offset(6);
  @include media-breakpoint-up($breakpoint-3col) {
    @include make-col-offset(0);
    order: 3;
  }
  @include media-breakpoint-up($breakpoint-4col) {
    @include make-col-offset(3);
  }
}
</style>
