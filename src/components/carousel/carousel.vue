<template>
  <div class="m-carousel">
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
    autoPlay() {
      const play = () => {
        const childrenNames = this.getChildrenNames();
        let currentIndex = childrenNames.indexOf(this.getSelectedItem);
        const childrenLength = childrenNames.length;
        if (currentIndex === childrenLength - 1) {
          currentIndex = -1;
        }
        const newCurrentIndex = currentIndex + 1;
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
        });
      });
    },
  },
};
</script>
<style lang="scss">
.m-carousel {
  border: 1px solid red;
  overflow: hidden;
  display: flex;
}
</style>