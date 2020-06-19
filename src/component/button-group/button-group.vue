<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "m-button-group"
};
</script>
<style lang="scss" scoped>
.button-group {
  display: inline-flex;
  vertical-align: middle;
  > button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--button-radius);
      border-bottom-left-radius: var(--button-radius);
    }
    &:last-child {
      border-top-right-radius: var(--button-radius);
      border-bottom-right-radius: var(--button-radius);
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
