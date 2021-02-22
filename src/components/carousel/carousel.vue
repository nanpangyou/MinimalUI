<template>
  <div class="m-carousel">
    <div @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
      <slot></slot>
    </div>
    <div class="m-carousel-dots" v-if="nav">
      <span class="prev" @click="onClickLeft">
        <m-icon name="left"></m-icon>
      </span>
      <span class="dots-wrapper">
        <span
          v-for="item of childrenLength"
          :key="item"
          class="item-dots"
          :class="{ selected: item === getSelectedItemIndex + 1 }"
          @click="selectItem"
          :data-index="item"
        >
        </span>
      </span>
      <span class="next" @click="onClickRight">
        <m-icon name="right"></m-icon>
      </span>
    </div>
  </div>
</template>
<script>
import MIcon from "../icon/icon";
export default {
  name: "MCarousel",
  components: {
    MIcon,
  },
  props: {
    selected: {
      type: String,
    },
    enableAutoPlay: {
      type: Boolean,
    },
    autoPlayDelay: {
      type: Number | String,
      default: undefined,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    nav: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timeId: undefined,
      childrenLength: undefined,
    };
  },
  mounted() {
    this.childrenLength = this.getChildrenLength();
    if (this.enableAutoPlay) {
      this.autoPlay();
    }
    this.updateChildrenSelected();
  },
  computed: {
    getSelectedItem() {
      // 获取当前选中的项目
      return this.selected || this.$children[0].name;
    },
    getSelectedItemIndex() {
      // 获取selected的下标
      return this.getChildrenNames().indexOf(this.getSelectedItem);
    },
  },
  methods: {
    onClickLeft() {
      // 点击左按钮
      this.stopAutoPlay();
      const childrenNames = this.getChildrenNames();
      let currentIndex = childrenNames.indexOf(this.getSelectedItem);
      const childrenLength = this.getChildrenLength();
      let newCurrentIndex;
      if (currentIndex === 0) {
        currentIndex = childrenLength;
      }
      newCurrentIndex = currentIndex - 1;
      this.$emit("update:selected", childrenNames[newCurrentIndex]);
      this.updateChildrenSelected({ reverse: true });
      this.startAutoPlay();
    },
    onClickRight() {
      // 点击左按钮
      this.stopAutoPlay();
      const childrenNames = this.getChildrenNames();
      let currentIndex = childrenNames.indexOf(this.getSelectedItem);
      const childrenLength = this.getChildrenLength();
      let newCurrentIndex;
      if (currentIndex === childrenLength.length - 1) {
        currentIndex = -1;
      }
      newCurrentIndex = currentIndex + 1;
      this.$emit("update:selected", childrenNames[newCurrentIndex]);
      this.updateChildrenSelected({ reverse: false });
      this.startAutoPlay();
    },
    selectItem(e) {
      // 点击dots-item,为了防止一些情况，当点击的时候先移除定时器，完成切换时再继续
      this.stopAutoPlay();
      const index = e.target.attributes["data-index"].value;
      const childrenNames = this.getChildrenNames();
      this.$emit("update:selected", childrenNames[index - 1]);
      this.updateChildrenSelected();
      this.startAutoPlay();
    },
    stopAutoPlay() {
      // 鼠标移入时取消自动播放
      if (this.timeId) {
        window.clearTimeout(this.timeId);
      }
    },
    startAutoPlay() {
      // 鼠标移出时添加自动播放
      if (this.enableAutoPlay) {
        this.autoPlay();
      }
    },
    autoPlay() {
      const play = () => {
        const childrenNames = this.getChildrenNames();
        let currentIndex = childrenNames.indexOf(this.getSelectedItem);
        const childrenLength = this.getChildrenLength();
        let newCurrentIndex;
        if (!this.reverse) {
          if (currentIndex === childrenLength - 1) {
            currentIndex = -1;
          }
          newCurrentIndex = currentIndex + 1;
        } else {
          if (currentIndex === 0) {
            currentIndex = childrenLength;
          }
          newCurrentIndex = currentIndex - 1;
        }
        this.$emit("update:selected", childrenNames[newCurrentIndex]);
        this.updateChildrenSelected();
        this.timeId = setTimeout(play, this.autoPlayDelay || 1500);
      };
      this.timeId = setTimeout(play, this.autoPlayDelay || 1500);
    },
    getChildrenLength() {
      // 获取轮播元素的长度
      // console.log(this.$children.map((vm) => vm.$options.name));
      return this.$children.filter((vm) => vm.$options.name === "MCarouselItem")
        .length;
    },
    getChildrenNames() {
      return this.$children
        .filter((vm) => vm.$options.name === "MCarouselItem")
        .map((vm) => vm.name);
    },
    updateChildrenSelected(data) {
      this.$nextTick(() => {
        this.$children
          .filter((vm) => vm.$options.name === "MCarouselItem")
          .forEach((vm) => {
            vm.selected = this.getSelectedItem;
            vm.reverse = data ? data.reverse : this.reverse;
          });
      });
    },
  },
};
</script>
<style lang="scss">
.m-carousel {
  overflow: hidden;
  position: relative;
  .m-carousel-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    .prev {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 50%;
      &:hover {
        background: #ccc;
      }
    }
    .dots-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      margin: 10px 30px;
      .item-dots {
        margin: 0 10px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        content: "";
        background: #ccc;
        cursor: pointer;
        &.selected {
          background: #333;
        }
      }
    }
    .next {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 50%;
      &:hover {
        background: #ccc;
      }
    }
  }
}
</style>