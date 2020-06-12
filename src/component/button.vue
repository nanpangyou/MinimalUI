<template>
  <button class="m-button">按钮</button>
</template>

<script>
export default {};
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
}
</style>