<template>
  <transition name="slide" mode="in-out">
    <div class="m-carousel-item" v-if="isVisiable">
      <slot></slot>
    </div>
  </transition>
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
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>