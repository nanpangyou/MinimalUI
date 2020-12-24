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
    // direction: {
    //   type: String,
    //   default: "horizontal",
    //   validator: (value) => {
    //     return ["horizontal", "vertical"].includes(value);
    //   },
    // },
  },
  provide() {
    return {
      eventHub: this.eventHub,
    };
  },
  mounted() {
    this.initStyle();
  },
  methods: {
    initStyle() {
      //emit初始化选中的item信息
      this.$children.forEach((i) => {
        if (i.$options.name === "MTabsHead") {
          i.$children.forEach((j) => {
            if (j.$options.name === "MTabsItem" && j.name === this.selected) {
              this.eventHub.$emit("update:selected", this.selected, j.$el);
            }
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.m-tabs {
  min-width: 600px;
}
</style>