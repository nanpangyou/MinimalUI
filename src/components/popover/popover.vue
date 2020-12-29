<template>
  <div class="popover-wrapper">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      :class="`position-${position}`"
      v-if="visiable"
    >
      <slot :close="onHide"></slot>
    </div>

    <span class="trigger-wrapper" ref="triggerWrapper">
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
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "left", "right", "bottom"].includes(value);
      },
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].includes(value);
      },
    },
  },
  computed: {},
  mounted() {
    if (this.trigger === "click") {
      this.$refs.triggerWrapper.addEventListener("click", this.onClick);
    } else if (this.trigger === "hover") {
      this.$refs.triggerWrapper.addEventListener("mouseenter", this.onShow);
      this.$refs.triggerWrapper.addEventListener("mouseleave", this.onHide);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.triggerWrapper.removeListener("click", this.onClick);
    } else if (this.trigger === "hover") {
      this.$refs.triggerWrapper.removeListener("mouseenter", this.onShow);
      this.$refs.triggerWrapper.removeListener("mouseleave", this.onHide);
    }
  },
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
        width: triggerWidth,
        height: triggerHeight,
        top: triggerTop,
        left: triggerLeft,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      const {
        width: contentWidth,
        height: contentHeight,
        top: contentTop,
        left: contentLeft,
      } = this.$refs.contentWrapper.getBoundingClientRect();
      let contentWrapperStyle = this.$refs.contentWrapper.style;
      const positions = {
        top: {
          top: window.scrollY + triggerTop,
          left: window.scrollX + triggerLeft,
        },
        bottom: {
          top: window.scrollY + triggerTop + contentHeight + triggerHeight,
          left: window.scrollX + triggerLeft,
        },
        left: {
          top:
            window.scrollY + triggerTop - (contentHeight - triggerHeight) / 2,
          left: window.scrollX + triggerLeft,
        },
        right: {
          top:
            window.scrollY + triggerTop - (contentHeight - triggerHeight) / 2,
          left: window.scrollX + triggerLeft + triggerWidth,
        },
      };
      contentWrapperStyle.top = positions[this.position].top + "px";
      contentWrapperStyle.left = positions[this.position].left + "px";
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
  background: #fff;
  z-index: 9999;
  padding: 0.5em 1em;
  border-radius: 6px;
  max-width: 20em;
  word-break: break-all;
  filter: drop-shadow(0px 0px 1.3px #222);
  &:before,
  &:after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    border: 10px solid;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &:before,
    &:after {
      border-bottom: none;
      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: #333;
      top: 100%;
      left: 10px;
    }
    &:after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    transform: translateY(-100%);
    &:before,
    &:after {
      border-top: none;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: #333;
      bottom: 100%;
      left: 10px;
    }
    &:after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &:before,
    &:after {
      border-right: none;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-left-color: #333;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &:after {
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &:before,
    &:after {
      border-left: none;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-right-color: #333;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &:after {
      border-right-color: #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>