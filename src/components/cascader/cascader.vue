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
        :loading-item="loadingItem"
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
      loadingItem: {},
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
      // 递归查找选中的item在source中的位置
      let simplest = (children, id) => {
        return children.filter((item) => item.id === id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach((item) => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simplest(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      const updateSource = (data) => {
        if (data.length) {
          let copy = JSON.parse(JSON.stringify(this.source));
          let toUpdate = complex(copy, lastItem.id);
          toUpdate.children = data;
          this.$emit("update:source", copy);
          this.loadingItem = {};
        }
      };
      if (this.loadData && typeof this.loadData === "function") {
        this.$emit("update:selected", copy);
        this.loadData(lastItem, updateSource);
        this.loadingItem = lastItem;
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