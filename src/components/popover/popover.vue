<template>
  <div class="popover-wrapper">
    <div class="content-wrapper" v-if="visiable">
      <slot></slot>
    </div>

    <span class="trigger-wrapper" @click="xxx">
      <slot name="reference"></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "MPopover",
  data() {
    return {
      visiable: false,
    };
  },
  mounted() {},
  methods: {
    xxx() {
      this.visiable = !this.visiable;
    },
  },
};
</script>
<style lang="scss" scoped>
.popover-wrapper {
  display: inline-block;
  .content-wrapper {
    border: 1px solid red;
  }
  .trigger-wrapper {
  }
}
</style>