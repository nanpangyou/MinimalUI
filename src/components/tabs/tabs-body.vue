<template>
  <div class="m-tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MTabsBody",
  inject: ["eventHub"],
};
</script>
<style lang="scss" scoped>
</style>