<template>
  <div>
    <m-collapse :selected.sync="selectedArr">
      <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
      <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
      <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
    </m-collapse>
    {{ selectedArr }}
  </div>
</template>
<script>
import MCollapse from "../../../../src/components/collapse/collapse";
import MCollapseItem from "../../../../src/components/collapse/collapse-item";
export default {
  data() {
    return {
      selectedArr: ["1", "2"],
    };
  },
  components: {
    "m-collapse": MCollapse,
    "m-collapse-item": MCollapseItem,
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>
    