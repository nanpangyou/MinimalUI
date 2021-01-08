<template>
  <div class="m-cascader">
    <div class="trigger-wrapper">
      <div class="trigger" @click="toggle"></div>
    </div>
    <div class="popover" v-if="isVisiable">
      <m-cascader-item :source="source" />
    </div>
  </div>
</template>
<script>
import MCascaderItem from "./cascader-item";
export default {
  name: "MCascader",
  components: {
    "m-cascader-item": MCascaderItem,
  },
  props: {
    source: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isVisiable: false,
    };
  },
  methods: {
    toggle() {
      this.isVisiable = !this.isVisiable;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../css/var";
.m-cascader {
  position: relative;
  .trigger-wrapper {
    .trigger {
      border: 1px solid red;
      min-height: 30px;
      width: 180px;
    }
  }
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid $gray;
  }
}
</style>