<template>
  <div class="m-toast" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message-part">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span class="line" v-if="closeButton" ref="line"></span>
      <span v-if="closeButton" class="close-btn" @click="closeCallback">
        {{ closeButton.msg }}
      </span>
    </div>
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
    enableHTML: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        if (!["top", "bottom", "middle"].includes(value)) {
          console.error(
            `MToast组件的position应为top,bottom,middle中的一个，现在为${value}`
          );
        }
        return ["top", "bottom", "middle"].includes(value);
      },
    },
  },
  mounted() {
    this.updateStyle();
    this.excuteClose();
  },
  computed: {
    toastClasses() {
      return [`position-${this.position}`];
    },
  },
  methods: {
    updateStyle() {
      //设置分割线高度
      if (this.closeButton && this.closeButton.msg) {
        this.$nextTick(() => {
          //  设置分割线的高度
          this.$refs.line.style.height = getComputedStyle(
            this.$refs.toast
          ).height;
        });
      }
    },
    excuteClose() {
      if (this.autoDelay) {
        setTimeout(() => {
          this.close();
        }, this.delayTime);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("closeToast");
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
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.m-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  z-index: 11111;
  &.position-top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    top: 0;
    .toast {
      animation: slide-down 300ms;
    }
  }
  &.position-bottom {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    bottom: 0;
    .toast {
      animation: slide-up 300ms;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    .toast {
      animation: fade-in 300ms;
    }
  }

  .toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-height;
    display: flex;
    align-items: center;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    border-radius: inherit;
    color: #fff;
    padding: 0 8px;

    .message-part {
      margin: 8px 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #ccc;
      margin-left: 8px;
      margin-right: 8px;
    }
    .close-btn {
      flex-shrink: 0;
      cursor: pointer;
    }
  }
}
</style>
