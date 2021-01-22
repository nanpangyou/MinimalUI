<template>
  <div class="m-cascader" v-click-outside="close">
    <div class="trigger-wrapper">
      <div class="trigger" @click="toggle" :class="[{ active: isVisiable }]">
        {{ selected.length ? selected.map((i) => i.name).join("/") : "&nbsp;" }}
      </div>
    </div>
    <div class="popover" v-if="isVisiable">
      <m-cascader-item
        :source="source"
        :selected="selected"
        @update:selected="emitSelectedCopy"
        @selected-done="close"
      />
    </div>
  </div>
</template>
<script>
import MCascaderItem from "./cascader-item";
import clickOutside from "./click-outside";
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
  directives: {
    clickOutside,
  },
  methods: {
    close() {
      this.isVisiable = false;
    },
    open() {
      this.isVisiable = true;
    },
    toggle() {
      if (this.isVisiable === true) {
        this.close();
      } else {
        this.open();
      }
    },
    emitSelectedCopy(copy) {
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
      } else {
        this.$emit("update:selected", copy);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../css/var";
.m-cascader {
  position: relative;
  display: inline-flex;
  .trigger-wrapper {
    .trigger {
      border: 1px solid $gray;
      min-height: 30px;
      width: 180px;
      display: flex;
      align-items: center;
      border-radius: $border-radius;
      padding: 0 1em;
      &.active {
        @extend .wight-box-shadow;
      }
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