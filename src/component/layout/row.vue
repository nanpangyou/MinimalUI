<template>
  <div class="m-row">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.m-row {
  height: 60px;
  line-height: 60px;
  display: flex;
  border: 1px solid aquamarine;
}
</style>
