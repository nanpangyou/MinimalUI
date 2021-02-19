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
  },
  mounted() {
    if (this.enableAutoPlay) {
      this.autoPlay();
    }
    this.updateChildrenSelected();
  },
  methods: {
    autoPlay() {
      const childrenNames = this.getChildrenNames();
      const currentIndex = childrenNames.indexOf(this.getSelectedItem());
      const childrenLength = childrenNames.length;
      const play = () => {
        setTimeout(() => {
          console.log(currentIndex, childrenLength);
          if (currentIndex === childrenLength - 1) {
            currentIndex = -1;
            console.log(1111);
          }
          const newCurrentIndex = currentIndex + 1;
          console.log(childrenNames[newCurrentIndex]);
          this.$emit("update:selected", childrenNames[newCurrentIndex]);
          play();
        }, 1500);
      };
      play();
    },
    getChildrenNames() {
      return this.$children.map((vm) => vm.name);
    },
    getSelectedItem() {
      return this.selected || this.$children[0].name;
    },
    updateChildrenSelected() {
      this.$children.forEach((vm) => {
        vm.selected = this.getSelectedItem();
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