<template>
  <svg v-if="name" :class="`icon-${name}`" class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import "./svg";
export default {
  name: "m-icon",
  props: {
    name: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
