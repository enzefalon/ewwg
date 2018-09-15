<template>
  <!-- TODO: make containers behave similar with different content heights (badges always at bottom, etc ...)-->
  <div>
    <media-preview
      :media-path="mediaPath"
      class="media-preview"/>
    <head-line
      :content-headline="'10.09.2018 - 23.00 Uhr'"
      :type-headline="'h4'"
      class="light-0_75-grey preview-date" />
    <head-line
      :content-headline="'Lorem ipsum dolor'"
      :type-headline="'h3'"
      class="bold-1_5-primary preview-head" />
    <p class="medium-1-light preview-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div class="preview-tags">
      <general-button
      :content-button="'Abstract'"
      :elem-class="'medium-0_75-primary'"
      :tab-index="1" />
      <general-button
      :content-button="'Ambient'"
      :elem-class="'medium-0_75-primary'"
      :tab-index="2" />
    </div>
  </div>
</template>

<script>
import GeneralButton from "@/components/base/partials/GeneralButton";
import MediaPreview from "@/components/base/partials/MediaPreview";
import HeadLine from "@/components/base/partials/HeadLine";

export default {
  components: { MediaPreview, HeadLine, GeneralButton },
  props: {
    mediaPath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "PreviewCard"
};
</script>

<style lang="scss">
.media-preview {
  @include vertical-spacing-half(false, true);
  margin-left: -($grid-gutter-width / 2);
  margin-right: -($grid-gutter-width / 2);
  padding-right: $border-base-width;
}
.preview-head,
.preview-date {
  @include vertical-spacing-quarter(false, true);
}
.preview-desc {
  @include vertical-spacing-half(false, true);
}
.preview-tags {
  .cta {
    margin-right: 0.5em;
  }
}
</style>
