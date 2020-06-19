<template>
  <div class="wrapper">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :class="{ error }"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event)"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
    />
    <template v-if="error">
      <m-icon name="error"></m-icon>
      <span class="error-msg">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "../icon/icon";
export default {
  name: "m-input",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    MIcon: Icon
  }
};
</script>

<style lang="scss" scoped>
$height: 28px;
$font-color: #333;
$border-color: #999;
$font-size: 14px;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  > :not(:last-child) {
    margin-right: 5px;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 0.5em;
    font-size: inherit;
    &:hover {
      box-shadow: inset 0 0 2px #333;
    }
    &:focus {
      outline-color: #333;
    }
    &[disabled],
    &[readonly] {
      color: #cccccc;
      border: 1px solid #ccc;
      cursor: not-allowed;
    }
    &.error {
      &:hover {
        box-shadow: inset 0 0 2px red;
      }
      &:focus {
        outline-color: red;
      }
      border: 1px solid red;
    }
  }
  .icon-error {
    fill: red;
  }
  .error-msg {
    color: red;
  }
}
</style>
