<template>
  <div class="m-cascader-item">
    <div class="left">
      <ul class="level-wrapper">
        <li
          class="level-item"
          v-for="item in source"
          :key="item.id"
          @click="selectItem(item)"
        >
          <span>
            {{ item.name }}
          </span>
          <m-icon
            class="icon"
            name="right"
            v-if="!item.isLeaf && loadingItem.id !== item.id"
          ></m-icon>
          <m-icon
            class="icon loading"
            name="loading"
            v-if="loadingItem.id === item.id && !item.isLeaf"
          ></m-icon>
        </li>
      </ul>
    </div>
    <div class="right" v-if="selectedItem">
      <m-cascader-item
        :source="selectedItem"
        :level="level + 1"
        :selected="selected"
        :loading-item="loadingItem"
        @update:selected="emitSelectedCopy"
        @selected-done="emitSelectedDone"
      ></m-cascader-item>
    </div>
  </div>
</template>
<script>
import MIcon from "../icon/icon";
export default {
  name: "MCascaderItem",
  components: {
    MIcon,
  },
  props: {
    source: {
      type: Array,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    loadingItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {
    selectedItem() {
      if (this.selected[this.level]) {
        let currentSelected = this.source.filter(
          (i) => i.name === this.selected[this.level].name
        )[0];
        // selectedItem是根据this.selected和this.level计算而来的，如果它们不发生变化则取缓存，不会更新，否则可以使用上面的方式，根据source来计算
        // let currentSelected = this.selected[this.level];
        if (currentSelected && currentSelected.children) {
          return currentSelected.children;
        } else {
          return null;
        }
      }
    },
  },
  methods: {
    selectItem(item) {
      const copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
      if (item.isLeaf) {
        this.$emit("selected-done");
      }
    },
    emitSelectedCopy(copy) {
      this.$emit("update:selected", copy);
    },
    emitSelectedDone() {
      this.$emit("selected-done");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../css/var";
ul,
li {
  padding: 0;
  margin: 0;
}
.m-cascader-item {
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  height: $cascader-height;
  // border: 1px solid red;
  background: #fff;
  display: flex;
  position: relative;
  .left {
    min-width: 80px;
    overflow: auto;
    flex-shrink: 0;
    .level-wrapper {
      list-style: none;
      .level-item {
        text-align: center;
        cursor: pointer;
        padding: 0.3em 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:first-child {
          padding-top: 0.6em;
        }
        &:last-child {
          padding-bottom: 0.6em;
        }
        &:hover {
          background: #eee;
        }
        .icon {
          margin-top: 4px;
          margin-left: 1em;
          transform: scale(0.6);
          &.loading {
            transform: scale(0.6);
            animation: spin 2s linear infinite;
          }
        }
      }
    }
  }
  .right {
    flex-shrink: 0;
    min-width: 80px;
    overflow: auto;
    border-left: 1px solid $border-color-light;
  }
}
</style>