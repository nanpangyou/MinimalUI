<template>
  <div>
    <h3>positon</h3>
    <m-button @click="showToast1">Top Toast</m-button>
    <m-button @click="showToast2">Bottom Toast</m-button>
    <m-button @click="showToast3">Middle Toast</m-button>
    <h3>设置延时关闭时间</h3>
    <m-button @click="showToast4">Delay 5s</m-button>
    <h3>设置关闭按钮</h3>
    <m-button @click="showToast5">with close button</m-button>
    <h3>设置enableHTML</h3>
    <m-button @click="showToast6">enableHTML Toast</m-button>
    <m-button @click="showToast7">enableHTML Toast</m-button>
  </div>
</template>
<script>
import Vue from "vue";
import ToastPlugin from "../../../../src/components/toast/toastPlugin";
import MButton from "../../../../src/components/button/button";
Vue.use(ToastPlugin);
export default {
  components: {
    "m-button": MButton,
  },
  mounted() {},
  methods: {
    showToast1() {
      this.$toast("this is toast", {
        position: "top",
      });
    },
    showToast2() {
      this.$toast("this is toast", {
        position: "bottom",
      });
    },
    showToast3() {
      this.$toast("this is toast", {
        position: "middle",
      });
    },
    showToast4() {
      this.$toast("this is toast", {
        delayTime: 5000,
      });
    },
    showToast5() {
      this.$toast("this is toast", {
        position: "middle",
        autoDelay: false,
        closeButton: {
          msg: "关闭",
          callback: (ToastInstance) => {
            console.log(
              "callback function called and this is ToastInstance",
              ToastInstance
            );
          },
        },
      });
    },
    showToast6() {
      this.$toast(`<span style='color:yellow'>enableHtml toast</span>`, {
        position: "middle",
        enableHTML: true,
      });
    },
    showToast7() {
      this.$toast(`<span style='color:yellow'>enableHtml toast</span>`, {
        position: "middle",
        enableHTML: true,
        closeButton: {
          msg: "关闭",
          callback: (ToastInstance) => {
            console.log(
              "callback function called and this is ToastInstance",
              ToastInstance
            );
          },
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
    