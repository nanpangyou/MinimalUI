<template>
  <button
    class="m-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <m-icon v-if="loading" name="loading"></m-icon>
    <m-icon v-if="!loading" :name="name"></m-icon>
    <div class="button-text">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Vue from "vue";
import mIcon from "../icon/icon";
export default {
  name: "m-button",
  components: {
    mIcon,
  },
  props: {
    name: {
      type: String,
    },
    iconPosition: {
      tpye: String,
      default: "left",
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
    loading: {},
  },
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@import "../../css/var";
.m-button {
  font-size: $button-size;
  height: $button-height;
  color: $button-font-color;
  padding: 0 1rem;
  border-radius: $button-radius;
  background: $button-bg;
  border: $button-border;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border: $button-hover-border;
  }

  &:active {
    background: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  &.icon-left {
    > .button-text {
      order: 2;
    }
    > .m-icon {
      order: 1;
      margin-right: 0.3em;
    }
  }

  &.icon-right {
    > .m-icon {
      order: 2;
    }
    > .button-text {
      order: 1;
      margin-right: 0.3em;
    }
  }
  .icon-loading {
    animation: spin 2s linear infinite;
  }
}
</style>
