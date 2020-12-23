<template>
  <div
    class="m-tabs-item"
    :disabled="disabled"
    :class="isSelected"
    @click="change"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MTabsItem",
  data() {
    return {
      selected: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  inject: ["eventHub"],
  computed: {
    isSelected() {
      return {
        "is-selected": this.selected,
      };
    },
  },
  methods: {
    change() {
      this.eventHub.$emit("update:selected", this.name);
    },
  },
  mounted() {
    this.eventHub.$on("update:selected", (selectedItem) => {
      this.selected = selectedItem === this.name;
    });
  },
};
</script>
<style lang="scss" scoped>
.m-tabs-item {
  flex-shrink: 0;
  padding: 0 0.2em;
  height: 40px;
  text-align: center;
  line-height: 40px;
  min-width: 60px;
  margin-top: 1px;
  cursor: pointer;
  &.is-selected {
    border-bottom: 3px solid #1890ff;
  }
}
</style>