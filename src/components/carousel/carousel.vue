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
  computed: {
    getSelectedItem() {
      console.log(111, this.selected);
      return this.selected || this.$children[0].name;
    },
  },
  methods: {
    autoPlay() {
      const play = () => {
        const childrenNames = this.getChildrenNames();
        console.log(222, this.selected);
        let currentIndex = childrenNames.indexOf(this.getSelectedItem);
        const childrenLength = childrenNames.length;
        setTimeout(() => {
          console.log(currentIndex, childrenLength);
          if (currentIndex === childrenLength - 1) {
            currentIndex = -1;
            console.log(1111);
          }
          console.log(childrenNames[currentIndex]);
          const newCurrentIndex = currentIndex + 1;
          console.log(childrenNames[newCurrentIndex]);
          this.$emit("update:selected", childrenNames[newCurrentIndex]);
          this.updateChildrenSelected();
          play();
        }, 1500);
      };
      play();
    },
    getChildrenNames() {
      return this.$children.map((vm) => vm.name);
    },

    updateChildrenSelected() {
      this.$children.forEach((vm) => {
        vm.selected = this.getSelectedItem;
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