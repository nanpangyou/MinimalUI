<template>
  <div class="m-tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MTabsHead",
  inject: ["eventHub"],
};
</script>
<style lang="scss" scoped>
.m-tabs-head {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  .actions-wrapper {
    margin: 0 3em 0 auto;
  }
}
</style>