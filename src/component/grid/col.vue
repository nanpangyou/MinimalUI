<template>
  <div class="m-col" :class="colClass" :style="gutterStyle">
    <div style="background:#eee;border: 1px solid maroon;height: 60px;">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    xs: {
      type: Object,
      validator(value) {
        return Object.keys(value)
          .map((i) => ["span", "offset"].includes(i))
          .every((i) => i === true);
      }
    }
  },
  data() {
    return {
      gutter: this.gutter
    };
  },
  methods: {
    getClass(obj, str) {
      return obj
        ? [
            obj.span && `m-${str}-col-${obj.span}`,
            obj.offset && `m-${str}-col-offset-${obj.offset}`
          ]
        : [];
    }
  },
  computed: {
    gutterStyle() {
      const halfGutter = this.gutter / 2;
      return this.gutter ? `padding: 0 ${halfGutter}px` : "";
    },
    colClass() {
      const { span, offset, xs } = this;
      return [
        span && `m-col-${span}`,
        offset && `m-col-offset-${offset}`,
        ...this.getClass(xs, "xs")
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.m-col {
  @for $i from 1 through 24 {
    &.m-col-#{$i} {
      width: ($i/24) * 100%;
    }
    &.m-col-offset-#{$i} {
      margin-left: ($i/24) * 100%;
    }
  }
  @media (max-width: 576px) {
    @for $i from 1 through 24 {
      &.m-xs-col-#{$i} {
        width: ($i/24) * 100%;
      }
      &.m-xs-col-offset-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }
}
</style>
