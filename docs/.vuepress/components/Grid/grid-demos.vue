<template>
  <div>
    <h2>没有gutter</h2>
    <div class="box">
      <m-row class="row-demo">
        <m-col :span="12" :xs="{ span: 24 }" class="col-demo"
          ><div class="content">1</div></m-col
        >
        <m-col :span="12" :xs="{ span: 24 }" class="col-demo"
          ><div class="content">2</div></m-col
        >
      </m-row>
      <m-row class="row-demo">
        <m-col
          :span="8"
          :xs="{ span: 24 }"
          :sm="{ span: 5 }"
          :md="{ span: 8 }"
          :lg="{ span: 10 }"
          class="col-demo"
        >
          <div class="content">1</div>
        </m-col>
        <m-col
          :span="8"
          :xs="{ span: 24 }"
          :sm="{ span: 9 }"
          :md="{ span: 8 }"
          :lg="{ span: 7 }"
          class="col-demo"
          ><div class="content">2</div></m-col
        >
        <m-col
          :span="8"
          :xs="{ span: 24 }"
          :sm="{ span: 10 }"
          :md="{ span: 8 }"
          :lg="{ span: 7 }"
          class="col-demo"
          ><div class="content">3</div></m-col
        >
      </m-row>
      <m-row class="row-demo">
        <m-col :span="1" class="col-demo"><div class="content">1</div></m-col>
        <m-col :span="3" :offset="20" class="col-demo"
          ><div class="content">2</div></m-col
        >
      </m-row>
      <m-row class="row-demo">
        <m-col :span="8"><div class="content">1</div></m-col>
        <m-col :span="8"><div class="content">2</div></m-col>
        <m-col :span="8"><div class="content">3</div></m-col>
      </m-row>
    </div>
  </div>
</template>
<script>
import MRow from "../../../../src/components/grid/row";
import MCol from "../../../../src/components/grid/col";
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