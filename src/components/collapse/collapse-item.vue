<template>
  <div class="m-collapse-item">
    <div class="m-collapse-item-title" @click="toggle">{{ title }}</div>
    <div v-if="isOpen" class="m-collapse-item-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  inject: ["eventBus"],
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    this.eventBus.$on("update:selected", (selected) => {
      this.isOpen = selected.includes(this.name);
    });
  },
  methods: {
    toggle() {
      if (this.isOpen) {
        this.eventBus.$emit("remove:selected", this.name);
      } else {
        this.eventBus.$emit("add:selected", this.name);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../css/var";
.m-collapse-item {
  border: 1px solid $gray;
  margin: -1px;
  padding: 1em 1em;
  &:first-child {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
  &:last-child {
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
  .m-collapse-item-title {
    height: $collapse-item-title-height;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 1px dashed $gray;
    }
  }
  .m-collapse-item-content {
    display: flex;
    align-items: center;
  }
}
</style>