<template>
  <div class="m-cascader">
    {{ selected.map((i) => i.name) }}
    <div class="trigger-wrapper">
      <div class="trigger" @click="toggle">
        {{ selected.map((i) => i.name).join("/") }}
      </div>
    </div>
    <div class="popover" v-if="isVisiable">
      <m-cascader-item
        :source="source"
        :selected="selected"
        @update:selected="emitSelectedCopy"
      />
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
    selected: {
      type: Array,
      default: () => [],
    },
    loadData: {
      type: Function,
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
    emitSelectedCopy(copy) {
      this.$emit("update:selected", copy);
      const lastItem = copy[copy.length - 1];
      const updateSource = (data) => {
        if (data.length) {
          const toUpdate = copy.filter((i) => i.id === lastItem.id)[0];
          toUpdate.children = data;
          this.$emit("update:selected", JSON.parse(JSON.stringify(copy)));
        }
      };
      if (this.loadData && typeof this.loadData === "function") {
        this.loadData(lastItem, updateSource);
      }
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
      display: flex;
      align-items: center;
    }
  }
  .popover {
    @extend .normal-box-shadow;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 99999;
  }
}
</style>