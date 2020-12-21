<template>
  <div>
    <h1>Toast</h1>
    <div class="box">
      <m-button @click="showToast">click</m-button>
      <section>展示toast</section>
    </div>
    <h1>Button</h1>
    <div class="box">
      <m-button :loading="loading1" @click="loading1 = !loading1">
        按钮</m-button
      >
      <m-button name="setting" :loading="loading2" @click="loading2 = !loading2"
        >按钮</m-button
      >
      <m-button
        name="setting"
        :loading="loading3"
        icon-position="right"
        @click="loading3 = !loading3"
        >按钮
      </m-button>
      <m-button-group>
        <m-button name="left">上一页</m-button>
        <m-button>更多</m-button>
        <m-button name="right" icon-position="right">下一页</m-button>
      </m-button-group>
    </div>
    <h1>Input</h1>
    <div class="box">
      <m-input></m-input>
      <m-input v-model="message"></m-input>
      <m-input :value="message" readonly></m-input>
      <m-input :value="message" disabled></m-input>
      <m-input :value="message" error="你错了"></m-input>
      <div>
        {{ message }}
      </div>
    </div>
    <h1>Grid</h1>
    <div class="box" style="border: 1px solid">
      <m-row :gutter="20">
        <m-col></m-col>
      </m-row>
      <m-row>
        <m-col :span="12" :xs="{ span: 24 }">1</m-col>
        <m-col :span="12" :xs="{ span: 24 }">2</m-col>
      </m-row>
      <m-row>
        <m-col
          :span="8"
          :xs="{ span: 24 }"
          :sm="{ span: 5 }"
          :md="{ span: 8 }"
          :lg="{ span: 10 }"
          >1</m-col
        >
        <m-col
          :span="8"
          :xs="{ span: 24 }"
          :sm="{ span: 9 }"
          :md="{ span: 8 }"
          :lg="{ span: 7 }"
          >2</m-col
        >
        <m-col
          :span="8"
          :xs="{ span: 24 }"
          :sm="{ span: 10 }"
          :md="{ span: 8 }"
          :lg="{ span: 7 }"
          >3</m-col
        >
      </m-row>
      <m-row>
        <m-col :span="1">1</m-col>
        <m-col :span="3" :offset="20">2</m-col>
      </m-row>
      <m-row :gutter="20" align="center">
        <m-col :span="4">1</m-col>
        <m-col :span="4">2</m-col>
        <m-col :span="4">3</m-col>
      </m-row>
      <m-row :gutter="20" align="right">
        <m-col :span="2">1</m-col>
        <m-col :span="4">2</m-col>
        <m-col :span="2" :offset="4">3</m-col>
        <m-col :span="3">4</m-col>
      </m-row>
    </div>
    <h1>Layout</h1>
    <div class="box">
      <m-layout style="min-height: 300px; border: 1px solid red">
        <m-header style="border: 1px solid">header</m-header>
        <m-content style="border: 1px solid">content</m-content>
        <m-footer style="border: 1px solid">footer</m-footer>
      </m-layout>
      <m-layout style="min-height: 300px; border: 1px solid red">
        <m-header style="border: 1px solid">header</m-header>
        <m-layout>
          <m-sider>sider</m-sider>
          <m-content style="border: 1px solid">content</m-content>
        </m-layout>
        <m-footer style="border: 1px solid">footer</m-footer>
      </m-layout>
    </div>
  </div>
</template>

<script>
import MButton from "../src/components/button/button";
import MIcon from "../src/components/icon/icon";
import MButtonGroup from "../src/components/button-group/button-group";
import MInput from "../src/components/input/input";
import MRow from "../src/components/grid/row";
import MCol from "../src/components/grid/col";
import MLayout from "../src/components/layout/layout";
import MHeader from "../src/components/layout/header";
import MContent from "../src/components/layout/content";
import MSider from "../src/components/layout/sider";
import MFooter from "../src/components/layout/footer";
import MToast from "../src/components/toast/toast";

export default {
  name: "App",
  components: {
    "m-button": MButton,
    "m-button-group": MButtonGroup,
    "m-icon": MIcon,
    "m-input": MInput,
    "m-row": MRow,
    "m-col": MCol,
    "m-layout": MLayout,
    "m-header": MHeader,
    "m-content": MContent,
    "m-sider": MSider,
    "m-footer": MFooter,
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      message: "value2",
    };
  },
  mounted() {
    this.$toast("我是 toast", { position: "middle" });
  },
  methods: {
    showToast() {
      this.$toast(`${Math.random()}xxx`, {
        enableHTML: true,
        delayTime: 8000,
        autoDelay: false,
        closeButton: {
          msg: "明白",
          // callback: () => {},
        },
      });
    },
  },
};
</script>

<style lang="scss">
</style>
