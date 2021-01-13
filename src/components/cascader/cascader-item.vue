<template>
  <div class="m-cascader-item">
    <!-- level:{{ level }} selected: {{ selected.map((i) => i.name) }} -->
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
          <m-icon class="icon" name="right" v-if="item.children"></m-icon>
        </li>
      </ul>
    </div>
    <div class="right" v-if="selectedItem">
      <m-cascader-item
        :source="selectedItem"
        :level="level + 1"
        @update:selected="emitSelectedCopy"
        :selected="selected"
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
  },
  data() {
    return {};
  },
  computed: {
    selectedItem() {
      let currentSelected = this.selected[this.level];
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      } else {
        return null;
      }
    },
  },
  methods: {
    selectItem(item) {
      const copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      console.log(copy);
      this.$emit("update:selected", copy);
    },
    emitSelectedCopy(copy) {
      this.$emit("update:selected", copy);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../css/var";
.m-cascader-item {
  height: $cascader-height;
  // border: 1px solid red;
  overflow: auto;
  background: #fff;
  display: flex;
  .left {
    min-width: 80px;
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
        }
      }
    }
  }
  .right {
    flex-shrink: 0;
    min-width: 80px;
    border-left: 1px solid $border-color-light;
  }
}
</style>