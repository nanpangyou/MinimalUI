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
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="right" v-if="selectedItem && selectedItem.children">
      <m-cascader-item
        :source="selectedItem.children"
        :currentLevel="level + 1"
      ></m-cascader-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "MCascaderItem",
  props: {
    source: {
      type: Array,
      required: true,
    },
    currentLevel: {
      type: Number,
    },
  },
  data() {
    return {
      selectedItem: {}, //选中的项
      level: 0,
    };
  },
  computed: {
    selectedItemChildren() {
      console.log(
        "children",
        this.selectedItem.id,
        this.source.filter((i) => i.parent_id === this.selectedItem.id)
      );
      return this.source.filter((i) => i.parent_id === this.selectedItem.id);
    },
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
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
      }
    }
  }
  .right {
    flex-shrink: 0;
    min-width: 80px;
    border-left: 1px solid $gray;
  }
}
</style>