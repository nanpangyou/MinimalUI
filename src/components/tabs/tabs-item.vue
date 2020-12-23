<template>
  <div class="m-tabs-item" :disabled="disabled">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
</style>