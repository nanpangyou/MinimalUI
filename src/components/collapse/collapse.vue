<template>
  <div class="m-collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "MCollapse",
  props: {
    selected: {
      type: Array,
    },
    single: {
      type: Boolean,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.initSelected();

    this.listenToAddSelectedItem();
    this.listenToRemoveSelectedItem();
  },
  methods: {
    initSelected() {
      this.eventBus.$emit("update:selected", this.selected);
    },
    listenToAddSelectedItem() {
      this.eventBus.$on("add:selected", (addItem) => {
        let selectedArr = JSON.parse(JSON.stringify(this.selected));
        this.single ? (selectedArr = [addItem]) : selectedArr.push(addItem);
        this.eventBus.$emit("update:selected", selectedArr);
        this.updatedSelected(selectedArr);
      });
    },
    listenToRemoveSelectedItem() {
      this.eventBus.$on("remove:selected", (removeItem) => {
        let selectedArr = JSON.parse(JSON.stringify(this.selected));
        const removeIndex = selectedArr.indexOf(removeItem);
        selectedArr.splice(removeIndex, 1);
        this.eventBus.$emit("update:selected", selectedArr);
        this.updatedSelected(selectedArr);
      });
    },
    updatedSelected(selectedArr) {
      this.$emit("update:selected", selectedArr);
    },
  },
};
</script>
<style lang="scss" scoped>
$gray: #333;
$border-radius: 6px;
.m-collapse {
  border: 1px solid $gray;
  border-radius: $border-radius;
}
</style>