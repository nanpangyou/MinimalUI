<template>
  <div class="m-tabs-pane" :class="isSelected" v-if="selected">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MTabsPane",
  inject: ["eventHub"],
  data() {
    return {
      selected: false,
    };
  },
  props: {
    name: {
      type: String | Number,
      required: true,
    },
  },
  computed: {
    isSelected() {
      return {
        "is-selected": this.selected,
      };
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
.m-tabs-pane {
  min-height: 100px;
  border-radius: 0 0 5px 5px;
  padding: 1em;
}
</style>