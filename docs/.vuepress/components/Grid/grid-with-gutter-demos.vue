<template>
  <div>
    <h2>设置gutter</h2>
    <div class="box">
      <m-row class="row-demo" :gutter="20">
        <m-col :span="8"><div class="content">1</div></m-col>
        <m-col :span="8"><div class="content">2</div></m-col>
        <m-col :span="8"><div class="content">3</div></m-col>
      </m-row>
      <m-row class="row-demo" :gutter="20" align="center">
        <m-col :span="4"><div class="content">1</div></m-col>
        <m-col :span="4"><div class="content">2</div></m-col>
        <m-col :span="4"><div class="content">3</div></m-col>
      </m-row>
      <m-row class="row-demo" :gutter="20" align="right">
        <m-col :span="3"><div class="content">1</div></m-col>
        <m-col :span="4"><div class="content">2</div></m-col>
        <m-col :span="2" :offset="3"><div class="content">3</div></m-col>
        <m-col :span="3"><div class="content">4</div></m-col>
      </m-row>
    </div>
  </div>
</template>
<script>
import MRow from "../../../../src/component/grid/row";
import MCol from "../../../../src/component/grid/col";
export default {
  components: {
    "m-row": MRow,
    "m-col": MCol,
  },
};
</script>
<style lang="scss" scoped>
.box {
  border: 1px solid;
}
.content {
  border: 1px solid;
  height: 50px;
  background: seagreen;
}
.row-demo {
  margin: 5px 0;
}
</style>