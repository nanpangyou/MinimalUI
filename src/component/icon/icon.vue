<template>
  <svg v-if="name" :class="`icon-${name}`" class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>
<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>