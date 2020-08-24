<template>
  <div class="m-layout" :class="hasSider && 'm-layout-has-sider'">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hasSider: false
    };
  },
  mounted() {
    this.$children.map((i) => i.$options.name).some((i) => i === "m-sider")
      ? (this.hasSider = true)
      : (this.hasSider = false);
  }
};
</script>
<style lang="scss" scoped>
.m-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.m-layout-has-sider {
    flex-direction: row;
  }
}
</style>
