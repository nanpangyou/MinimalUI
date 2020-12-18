<template>
  <div class="toast">
    <slot></slot>
    <span class="line" v-if="closeButton"></span>
    <span v-if="closeButton" class="close-btn">
      <span @click="closeCallback">{{ closeButton.msg }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "MToast",
  props: {
    autoDelay: {
      type: Boolean,
      default: true,
    },
    delayTime: {
      type: [String, Number],
      default: 3000,
    },
    closeButton: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    if (this.autoDelay) {
      setTimeout(() => {
        this.close();
      }, this.delayTime);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    log() {
      console.log("log");
    },
    closeCallback() {
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  color: #fff;
  padding: 0 8px;
  .line {
    height: 100%;
    border-left: 1px solid #ccc;
    margin-left: 8px;
    margin-right: 8px;
  }
  .close-btn {
    cursor: pointer;
  }
}
</style>
