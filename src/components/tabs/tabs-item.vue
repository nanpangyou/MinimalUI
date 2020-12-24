<template>
  <div
    class="m-tabs-item"
    :disabled="disabled"
    :class="classes"
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
    classes() {
      return {
        "is-selected": this.selected,
        disabled: this.disabled,
      };
    },
  },
  methods: {
    change() {
      if (this.disabled) return;
      this.eventHub.$emit("update:selected", this.name, this.$el);
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
$color: #1890ff;
$disabled-color: #bbb;
.m-tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  height: 100%;
  margin-top: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: $color;
  }
  &.is-selected {
    color: $color;
  }
  &.disabled {
    cursor: not-allowed;
    color: $disabled-color;
  }
}
</style>