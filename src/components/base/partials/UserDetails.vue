<template>
  <div class="user-detail-complete">
    <div class="user-icon">
      <span class="icon-user-o"></span>
    </div>
    <div class="user-info">
      <p>John Doe</p>
      <head-line
        :content-headline="'10.09.2018 - 23.00 Uhr'"
        :type-headline="'h4'"
        class="light-0_75-grey preview-date" />
    </div>
  </div>
</template>

<script>
import HeadLine from "@/components/base/partials/HeadLine";
export default {
  components: { HeadLine },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  name: "UserDetails"
};
</script>

<style lang="scss">
.user-detail-complete {
  @include make-row();
}
.user-icon {
  @include make-col-ready();
  @include make-col(1);
  @extend .bold-2_25-primary;
  .icon-user-o {
    border: 1px solid;
    border-radius: 50%;
  }
}
.user-info {
  @extend .bold-1_5-primary;
}
</style>
