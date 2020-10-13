<template>
  <div>
    <div class="box">
      <m-layout class="layout">
        <m-header class="header">header</m-header>
        <m-content class="content">content</m-content>
        <m-footer class="footer">footer</m-footer>
      </m-layout>
    </div>
    <div class="box">
      <m-layout class="layout">
        <m-header class="header">header</m-header>
        <m-layout>
          <m-sider class="sider">sider</m-sider>
          <m-content class="content">content</m-content>
        </m-layout>
        <m-footer class="footer">footer</m-footer>
      </m-layout>
    </div>
    <div class="box">
      <m-layout class="layout">
        <m-header class="header">header</m-header>
        <m-layout>
          <m-content class="content">content</m-content>
          <m-sider class="sider">sider</m-sider>
        </m-layout>
        <m-footer class="footer">footer</m-footer>
      </m-layout>
    </div>
  </div>
</template>
<script>
import MLayout from "../../../../src/component/layout/layout";
import MHeader from "../../../../src/component/layout/header";
import MContent from "../../../../src/component/layout/content";
import MSider from "../../../../src/component/layout/sider";
import MFooter from "../../../../src/component/layout/footer";
export default {
  components: {
    "m-layout": MLayout,
    "m-header": MHeader,
    "m-content": MContent,
    "m-sider": MSider,
    "m-footer": MFooter,
  },
};
</script>
<style lang="scss" scoped>
.layout {
  min-height: 300px;
}
.box {
  margin: 8px 0;
}
.header {
  height: 60px;
  background: rgb(160, 191, 124);
}
.content {
  background: rgb(101, 174, 74);
}
.sider {
  background: rgb(64, 116, 52);
  width: 60px;
}
.footer {
  background: seagreen;
  height: 60px;
}
</style>
    