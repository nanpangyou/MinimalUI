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
    this.checkChildren();
    this.initStyle();
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            "tabs的子组件必须为tabs-head和tabs-body，但是目前没有子组件"
          );
      }
    },
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