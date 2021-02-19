<template>
  <div class="m-carousel-item" v-if="isVisiable">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MCarouselItem",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: undefined,
    };
  },
  mounted() {},
  computed: {
    isVisiable() {
      return this.name === this.selected;
    },
  },
};
</script>
<style lang="scss">
@import "../../css/var";
.m-carousel-item {
  height: $carousel-item-height;
  width: 100%;
  border: 1px solid $gray;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>