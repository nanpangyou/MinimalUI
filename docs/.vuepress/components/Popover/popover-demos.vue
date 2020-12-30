<template>
  <div class="box">
    <h3>带close回调</h3>
    <h4 style="color: red">(暂不支持Popover嵌套)</h4>
    <div>
      <m-popover position="top">
        <m-button slot="reference">点击 top</m-button>
        <template slot-scope="{ close }">
          this is popover
          <m-button @click="close">关闭</m-button>
        </template>
      </m-popover>
    </div>
    <h3>click触发</h3>
    <div>
      <m-popover position="top">
        <m-button slot="reference">点击 top</m-button>
        this is popover
      </m-popover>

      <m-popover position="left">
        <m-button slot="reference">点击 left</m-button>
        <div>this is popover</div>
      </m-popover>

      <m-popover position="right">
        this is popover
        <m-button slot="reference">点击 right</m-button>
      </m-popover>

      <m-popover position="bottom">
        <m-button slot="reference">点击 bottom</m-button>
        <div>this is popover</div>
      </m-popover>
    </div>

    <h3>hover触发</h3>
    <div>
      <m-popover position="top" trigger="hover">
        <m-button slot="reference">hover top</m-button>
        this is popover
      </m-popover>

      <m-popover position="left" trigger="hover">
        <m-button slot="reference">hover left</m-button>
        <div>this is popover</div>
        this is popover
      </m-popover>

      <m-popover position="right" trigger="hover">
        <m-button slot="reference">hover right</m-button>
        this is popover
      </m-popover>

      <m-popover position="bottom" trigger="hover">
        <m-button slot="reference">hover bottom</m-button>
        <div>this is popover</div>
      </m-popover>
    </div>
  </div>
</template>
<script>
import MPopover from "../../../../src/components/popover/popover";
import MButton from "../../../../src/components/button/button";
export default {
  components: {
    "m-popover": MPopover,
    "m-button": MButton,
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.box {
  > div {
    padding: 3em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    // &:nth-child(2) {
    //   justify-content: flex-start;
    //   > h3 {
    //     margin-right: 3px;
    //   }
    //   > div {
    //     margin-right: auto;
    //   }
    // }
  }
}
</style>
    