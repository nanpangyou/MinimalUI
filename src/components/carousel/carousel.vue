<template>
  <div
    class="m-carousel"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MCarousel",
  props: {
    selected: {
      type: String,
    },
    enableAutoPlay: {
      type: Boolean,
    },
    autoPlayDelay: {
      type: Number | String,
      default: undefined,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timeId: undefined,
    };
  },
  mounted() {
    if (this.enableAutoPlay) {
      this.autoPlay();
    }
    this.updateChildrenSelected();
  },
  computed: {
    getSelectedItem() {
      return this.selected || this.$children[0].name;
    },
  },
  methods: {
    stopAutoPlay() {
      // 鼠标移入时取消自动播放
      if (this.timeId) {
        window.clearTimeout(this.timeId);
      }
    },
    startAutoPlay() {
      // 鼠标移出时添加自动播放
      if (this.enableAutoPlay) {
        this.autoPlay();
      }
    },
    autoPlay() {
      const play = () => {
        const childrenNames = this.getChildrenNames();
        let currentIndex = childrenNames.indexOf(this.getSelectedItem);
        const childrenLength = childrenNames.length;
        let newCurrentIndex;
        if (!this.reverse) {
          if (currentIndex === childrenLength - 1) {
            currentIndex = -1;
          }
          newCurrentIndex = currentIndex + 1;
        } else {
          if (currentIndex === 0) {
            currentIndex = childrenLength;
          }
          newCurrentIndex = currentIndex - 1;
        }
        this.$emit("update:selected", childrenNames[newCurrentIndex]);
        this.updateChildrenSelected();
        this.timeId = setTimeout(play, this.autoPlayDelay || 1500);
      };
      this.timeId = setTimeout(play, this.autoPlayDelay || 1500);
    },
    getChildrenNames() {
      return this.$children.map((vm) => vm.name);
    },

    updateChildrenSelected() {
      this.$nextTick(() => {
        this.$children.forEach((vm) => {
          vm.selected = this.getSelectedItem;
          vm.reverse = this.reverse;
        });
      });
    },
  },
};
</script>
<style lang="scss">
.m-carousel {
  overflow: hidden;
  position: relative;
}
</style>