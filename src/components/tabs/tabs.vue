<template>
  <div class="m-tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "MTabs",
  data() {
    return {
      eventHub: new Vue(),
    };
  },
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
  provide() {
    return {
      eventHub: this.eventHub,
    };
  },
  mounted() {
    this.eventHub.$emit("update:selected", this.selected);
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  min-width: 600px;
}
</style>