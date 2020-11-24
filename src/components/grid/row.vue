<template>
  <div class="m-row" :style="gutterStyle" :class="alignClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      default: "left",
      validator(value) {
        ["left", "right", "center"].includes(value)
          ? ""
          : console.error(
              `align的值必须为left,right,center中的一个，现在为${value}`
            );
        return ["left", "right", "center"].includes(value);
      },
    },
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
    },
    alignClass() {
      const { align } = this;
      return [align && `align-${align}`];
    },
  },
};
</script>
<style lang="scss" scoped>
.m-row {
  display: flex;
  flex-wrap: nowrap;
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-left {
    justify-content: flex-start;
  }
}
</style>
