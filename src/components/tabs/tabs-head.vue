<template>
  <div class="m-tabs-head" ref="mTabsHead">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MTabsHead",
  inject: ["eventHub"],
  mounted() {
    this.updateLineStyle();
  },
  methods: {
    updateLineStyle() {
      //初始化item下的选择线位置
      this.eventHub &&
        this.eventHub.$on("update:selected", (selectedName, selectedDom) => {
          const {
            width,
            height,
            top,
            left,
          } = selectedDom.getBoundingClientRect();
          this.$refs.line.style.width = width + "px";
          this.$refs.line.style.left =
            left - this.$refs.mTabsHead.getBoundingClientRect().left + "px";
        });
    },
  },
};
</script>
<style lang="scss" scoped>
$color: #1890ff;
.m-tabs-head {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  position: relative;
  .actions-wrapper {
    margin: 0 3em 0 auto;
    display: flex;
  }
  .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $color;
    transition: all 250ms;
  }
}
</style>