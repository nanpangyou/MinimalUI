<template>
  <div class="m-row" :style="gutterStyle" :class="[align && `align-${align}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        const result = ["left", "right", "middle"].includes(value)
          ? ""
          : console.error(
              `align的值必须为left,right,middle中的一个，现在为${value}`
            );
        return ["left", "right", "middle"].includes(value);
      }
    }
  },
  mounted() {
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
  &.align-right {
    text-align: right;
  }
  &.align-middle {
    text-align: center;
  }
}
</style>
