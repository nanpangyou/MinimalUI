<template>
  <div class="m-tabs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (value) => {
        return ["horizontal", "vertical"].includes(value);
      },
    },
  },
  created() {
    this.$emit("update:selected", "3");
  },
};
</script>
<style lang="scss" scoped>
</style>