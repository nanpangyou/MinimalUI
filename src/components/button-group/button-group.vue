<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "m-button-group",
};
</script>
<style lang="scss" scoped>
$button-size: 14px;
$button-height: 32px;
$button-font-color: #333;
$button-bg: #fff;
$button-radius: 4px;
$button-border: 1px solid #888;
$button-hover-border: 1px solid #222;
$button-active-bg: #eee;
.button-group {
  display: inline-flex;
  vertical-align: middle;
  > button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: $button-radius;
      border-bottom-left-radius: $button-radius;
    }
    &:last-child {
      border-top-right-radius: $button-radius;
      border-bottom-right-radius: $button-radius;
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
