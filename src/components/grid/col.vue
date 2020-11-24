<template>
  <div class="m-col" :class="colClass" :style="gutterStyle">
    <slot></slot>
  </div>
</template>
<script>
const validator = (value) => {
  return Object.keys(value)
    .map((i) => ["span", "offset"].includes(i))
    .every((i) => i === true);
};
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    xs: { type: Object, validator },
    sm: { type: Object, validator },
    md: { type: Object, validator },
    lg: { type: Object, validator },
    xl: { type: Object, validator },
    xxl: { type: Object, validator }
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
      const { span, offset, xs, sm, md, lg, xl, xxl } = this;
      return [
        span && `m-col-${span}`,
        offset && `m-col-offset-${offset}`,
        ...this.getClass(xs, "xs"),
        ...this.getClass(sm, "sm"),
        ...this.getClass(md, "md"),
        ...this.getClass(lg, "lg"),
        ...this.getClass(xl, "xl"),
        ...this.getClass(xxl, "xxl")
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
  @media (min-width: 576px) {
    @for $i from 1 through 24 {
      &.m-sm-col-#{$i} {
        width: ($i/24) * 100%;
      }
      &.m-sm-col-offset-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }
  @media (min-width: 768px) {
    @for $i from 1 through 24 {
      &.m-md-col-#{$i} {
        width: ($i/24) * 100%;
      }
      &.m-md-col-offset-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    @for $i from 1 through 24 {
      &.m-lg-col-#{$i} {
        width: ($i/24) * 100%;
      }
      &.m-lg-col-offset-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    @for $i from 1 through 24 {
      &.m-xl-col-#{$i} {
        width: ($i/24) * 100%;
      }
      &.m-xl-col-offset-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }
  @media (min-width: 1600px) {
    @for $i from 1 through 24 {
      &.m-xxl-col-#{$i} {
        width: ($i/24) * 100%;
      }
      &.m-xxl-col-offset-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }
}
</style>
