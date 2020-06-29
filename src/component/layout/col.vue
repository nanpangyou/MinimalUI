<template>
  <div
    class="m-col"
    :class="[span && `m-col-${span}`, offset && `m-col-offset-${offset}`]"
    :style="gutterStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: Number
    },
    offset: {
      type: Number
    }
  },
  data() {
    return {
      gutter: this.gutter
    };
  },
  mounted() {
    console.log("zi");
    console.log(this.gutter);
  },
  computed: {
    gutterStyle() {
      const halfGutter = this.gutter / 2;
      console.log(this.gutter);
      return this.gutter ? `margin: 0 ${halfGutter}px` : "";
    }
  }
};
</script>
<style lang="scss" scoped>
.m-col {
  width: 50%;
  border: 1px solid orangered;
  @for $i from 1 through 24 {
    &.m-col-#{$i} {
      width: ($i/24) * 100%;
    }
    &.m-col-offset-#{$i} {
      margin-left: ($i/24) * 100%;
    }
  }
}
</style>
