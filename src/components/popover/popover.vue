<template>
  <div class="popover-wrapper">
    <div class="content-wrapper" ref="contentWrapper" v-if="visiable">
      <slot></slot>
    </div>

    <span class="trigger-wrapper" ref="triggerWrapper" @click="onClick">
      <slot name="reference"></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "MPopover",
  data() {
    return {
      visiable: false,
    };
  },
  mounted() {},
  methods: {
    doubleRaf(callback) {
      //解决异步渲染的bug。this.$nextTick()不生效，setTimeout(()=>{},0)也不够好
      //ISSUE https://github.com/vuejs/vue/issues/9200
      requestAnimationFrame(() => {
        requestAnimationFrame(callback);
      });
    },
    positionContent() {
      //在点击的元素上方显示popover
      document.body.appendChild(this.$refs.contentWrapper);
      const {
        width,
        height,
        top,
        left,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = window.scrollX + left + "px";
      this.$refs.contentWrapper.style.top = window.scrollY + top + "px";
    },
    documentListener(e) {
      //添加到document的监听函数，在点击popover范围以外时关闭popover
      if (
        this.$refs.contentWrapper &&
        this.$refs.contentWrapper.contains(e.target)
      ) {
        return;
      }
      this.onHide();
    },
    onShow() {
      this.visiable = true;
      this.doubleRaf(() => {
        //定位显示popover
        this.positionContent();
        //显示后添加document监听，方便可以在外部点击使得popover消失
        // console.log("添加document监听器");
        document.addEventListener("click", this.documentListener);
      });
    },
    onHide() {
      // 移除document监听器 并关闭popover
      // console.log(this, "document关闭,移除document监听器");
      this.visiable = false;
      document.removeEventListener("click", this.documentListener);
    },
    onClick(e) {
      this.visiable ? this.onHide() : this.onShow();
    },
  },
};
</script>
<style lang="scss" scoped>
.popover-wrapper {
  display: inline-block;
  .trigger-wrapper {
    display: inline-block;
  }
}
.content-wrapper {
  display: inline-block;
  border: 1px solid #333;
  position: absolute;
  transform: translateY(-100%);
  background: #fff;
  z-index: 9999;
  padding: 0.5em 1em;
  border-radius: 6px;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;
  filter: drop-shadow(0px 1.5px 1.3px #222);
  &:before,
  &:after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    border: 10px solid;
    border-bottom: none;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: #333;
    position: absolute;
    top: 100%;
    left: 10px;
  }
  &:after {
    border-top-color: #fff;
    top: calc(100% - 1px);
  }
}
</style>