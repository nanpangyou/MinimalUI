<template>
  <div class="m-row" :style="gutterStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: Number
    }
  },
  mounted() {
    console.log("fu");
    console.log(this.$children, this.gutter);
    this.$children.map((i) => (i.gutter = this.gutter));
  },
  computed: {
    gutterStyle() {
      const gutter = this.gutter;
      const halfGutter = gutter / 2;
      return gutter
        ? `margin-left:-${halfGutter}px; margin-right:-${halfGutter}px;`
        : "";
    }
  }
};
</script>
<style lang="scss" scoped>
.m-row {
  height: 60px;
  display: flex;
}
</style>
