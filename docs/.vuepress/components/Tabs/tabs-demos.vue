<template>
  <div>
    <div class="box" style="padding: 3em; width: 800px">
      <m-tabs :selected="selectedTab">
        <m-tabs-head>
          <m-tabs-item name="1"> <m-icon name="setting"></m-icon>1</m-tabs-item>
          <m-tabs-item name="2">2</m-tabs-item>
          <m-tabs-item name="3">3</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="1">pane1</m-tabs-pane>
          <m-tabs-pane name="2">pane2</m-tabs-pane>
          <m-tabs-pane name="3">pane3</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
    </div>
  </div>
</template>
<script>
import MIcon from "../../../../src/components/icon/icon";
import MTabs from "../../../../src/components/tabs/tabs";
import MTabsHead from "../../../../src/components/tabs/tabs-head";
import MTabsBody from "../../../../src/components/tabs/tabs-body";
import MTabsItem from "../../../../src/components/tabs/tabs-item";
import MTabsPane from "../../../../src/components/tabs/tabs-pane";
export default {
  components: {
    "m-icon": MIcon,
    "m-tabs": MTabs,
    "m-tabs-head": MTabsHead,
    "m-tabs-item": MTabsItem,
    "m-tabs-body": MTabsBody,
    "m-tabs-pane": MTabsPane,
  },
  data() {
    return {
      selectedTab: "3",
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>
    