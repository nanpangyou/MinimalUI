<template>
  <div>
    <div class="row">
      <m-button-group>
        <m-button name="left">上一页</m-button>
        <m-button>更多</m-button>
        <m-button name="right" icon-position="right">下一页</m-button>
      </m-button-group>
    </div>
  </div>
</template>
<script>
import MButton from "../../../../src/component/button/button";
import MButtonGroup from "../../../../src/component/button-group/button-group";
export default {
  components: {
    "m-button": MButton,
    "m-button-group": MButtonGroup,
  },
};
</script>
<style lang="scss" scoped>
.row {
  margin-bottom: 8px;
}
</style>