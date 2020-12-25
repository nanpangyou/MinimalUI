<template>
  <div>
    <div class="row">
      <m-button>默认按钮</m-button>
    </div>
    <div class="row">
      <m-button name="setting">带图标按钮</m-button>
      <m-button name="setting" iconPosition="right">图标在右侧按钮</m-button>
    </div>
    <div class="row">
      <m-button :loading="isLoading" @click="isLoading = !isLoading"
        >点击加载</m-button
      >
    </div>
  </div>
</template>
<script>
import MButton from "../../../../src/components/button/button";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    "m-button": MButton,
  },
};
</script>
<style lang="scss" scoped>
.row {
  margin-bottom: 8px;
}
</style>