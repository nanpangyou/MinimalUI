<template>
  <button class="m-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="name" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${name}`" />
    </svg>
    <div class="button-text">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    iconPosition: {
      tpye: String,
      default: "left",
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["left", "right"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style lang="scss">
.m-button {
  font-size: var(--button-size);
  height: var(--button-height);
  color: var(--button-font-color);
  padding: 0 1rem;
  border-radius: var(--button-radius);
  background: var(--button-bg);
  border: var(--button-border);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border: var(--button-hover-border);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  &.icon-left {
    > .button-text {
      order: 2;
    }
    > .icon {
      order: 1;
    }
  }

  &.icon-right {
    > .icon {
      order: 2;
    }
    > .button-text {
      order: 1;
    }
  }

  .icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>