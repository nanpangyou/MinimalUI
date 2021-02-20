<template>
  <div>
    <h1>Carousel</h1>
    <div style="margin: 10px 0">
      {{ carouselSelected }}
      <m-carousel
        :selected.sync="carouselSelected"
        :enableAutoPlay="true"
        :autoPlayDelay="3000"
      >
        <m-carousel-item :name="'info'">info</m-carousel-item>
        <m-carousel-item :name="'sport'">sport</m-carousel-item>
        <m-carousel-item :name="'finance'">finance</m-carousel-item>
        <m-carousel-item :name="'other'">other</m-carousel-item>
      </m-carousel>
    </div>
    <hr />
    <h1>Cascader</h1>
    <m-button @click="addData">添加数据</m-button>
    <div class="box">
      <m-cascader
        :source.sync="city2"
        :selected.sync="selectedCity2"
        :loadData="loadData"
      />
      <m-cascader :source.sync="city1" :selected.sync="selectedCity1" />
    </div>
    <h1>Collapse</h1>
    <div class="box">
      <m-collapse :selected.sync="selectedArr">
        <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
        <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
        <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
      </m-collapse>
      {{ selectedArr }}
    </div>
    <h1>Popover</h1>
    <div
      class="box"
      style="
        padding: 3em;
        width: 800px;
        border: 1px solid red;
        overflow: hidden;
        border-radius: 3px;
      "
    >
      <m-popover position="top">
        <m-button slot="reference">点击</m-button>
        <template slot-scope="{ close }">
          xxxxxxx
          <m-button @click="close">ggg</m-button>
        </template>
      </m-popover>
      <div style="width: 50px; display: inline-block"></div>
      <m-popover position="left">
        <m-button slot="reference">点击</m-button>
        <div>this is popover</div>
        popoverthverthis is popover Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Debitis quasi eveniet expedita repellendus a,
        voluptatem assumenda qui officiis, tempore sint, blanditiis vitae amet
        eius. Sunt, doloremque reprehenderit? Suscipit, perferendis quod!
      </m-popover>
      <div style="width: 50px; display: inline-block"></div>
      <m-popover position="right">
        <m-button slot="reference">点击</m-button>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum odit
        laborum tempora libero deleniti eaque eius dolore beatae labore quia cum
        molestiae minus soluta odio, quibusdam architecto aperiam magnam. Vel?
      </m-popover>
      <div style="width: 50px; display: inline-block"></div>
      <m-popover position="bottom">
        <m-button slot="reference">点击</m-button>
        <div>this is popover</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste,
        mollitia cumque ut nobis, quisquam maxime tempora fugiat laboriosam eum
        nostrum accusamus iure, reprehenderit labore quae aliquid similique nemo
        temporibus.
      </m-popover>
      <div></div>
      <m-popover position="top" trigger="hover">
        <m-button slot="reference">点击</m-button>
        xxxxxxl Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
        dolorum, accusamus laboriosam et, facilis deleniti voluptatibus nam
        quibusdam voluptates sunt similique sequi rerum debitis! Corporis
        repudiandae ex quas aliquam natus!
      </m-popover>
      <div style="width: 50px; display: inline-block"></div>
      <m-popover position="left" trigger="hover">
        <m-button slot="reference">点击</m-button>
        <div>this is popover</div>
        popoverthverthis is popover Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Debitis quasi eveniet expedita repellendus a,
        voluptatem assumenda qui officiis, tempore sint, blanditiis vitae amet
        eius. Sunt, doloremque reprehenderit? Suscipit, perferendis quod!
      </m-popover>
      <div style="width: 50px; display: inline-block"></div>
      <m-popover position="right" trigger="hover">
        <m-button slot="reference">点击</m-button>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum odit
        laborum tempora libero deleniti eaque eius dolore beatae labore quia cum
        molestiae minus soluta odio, quibusdam architecto aperiam magnam. Vel?
      </m-popover>
      <div style="width: 50px; display: inline-block"></div>
      <m-popover position="bottom" trigger="hover">
        <m-button slot="reference">点击</m-button>
        <div>this is popover</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste,
        mollitia cumque ut nobis, quisquam maxime tempora fugiat laboriosam eum
        nostrum accusamus iure, reprehenderit labore quae aliquid similique nemo
        temporibus.
      </m-popover>
    </div>
    <h1>Tabs</h1>
    <div class="box" style="padding: 3em; width: 800px">
      <!-- <m-tabs :selected="selectedTab" @update:selected="selectedTab = $event"> -->
      <!-- 上下的写法等价 -->
      <!-- <m-tabs :selected.sync="selectedTab" direction="horizontal"> -->

      <m-tabs :selected="selectedTab">
        <m-tabs-head>
          <template slot="actions">
            <m-button>action</m-button>
          </template>
          <m-tabs-item name="1"> <m-icon name="setting"></m-icon>1</m-tabs-item>
          <m-tabs-item name="2" disabled>2</m-tabs-item>
          <m-tabs-item name="3">3</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="1">pane1</m-tabs-pane>
          <m-tabs-pane name="2">pane2</m-tabs-pane>
          <m-tabs-pane name="3">pane3</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
    </div>
    <h1>Toast</h1>
    <div class="box">
      <m-button @click="showToast1">click</m-button>
      <m-button @click="showToast2">click</m-button>
      <m-button @click="showToast3">click</m-button>
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
import city from "../lib/city";
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
import MTabs from "../src/components/tabs/tabs";
import MTabsHead from "../src/components/tabs/tabs-head";
import MTabsBody from "../src/components/tabs/tabs-body";
import MTabsItem from "../src/components/tabs/tabs-item";
import MTabsPane from "../src/components/tabs/tabs-pane";
import MPopover from "../src/components/popover/popover";
import MCollapse from "../src/components/collapse/collapse";
import MCollapseItem from "../src/components/collapse/collapse-item";
import MCascader from "../src/components/cascader/cascader";
import MCascaderItem from "../src/components/cascader/cascader-item";
import MCarousel from "../src/components/carousel/carousel";
import MCarouselItem from "../src/components/carousel/carousel-item";

function ajax(parentId = 0, success, fail) {
  const result = city.filter((i) => i.parent_id === parentId);
  const timeId = setTimeout(() => {
    result.map((node) => {
      city.filter((i) => i.parent_id === node.id).length
        ? (node.isLeaf = false)
        : (node.isLeaf = true);
    });
    success(result);
  }, 300);
  return timeId;
}
function promiseAjax(parentId = 0) {
  return new Promise((resolve, reject) => {
    const result = city.filter((i) => i.parent_id === parentId);
    setTimeout(() => {
      result.map((node) => {
        city.filter((i) => i.parent_id === node.id).length
          ? (node.isLeaf = false)
          : (node.isLeaf = true);
      });
      resolve(result);
    }, 300);
  });
}

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
    "m-tabs": MTabs,
    "m-tabs-head": MTabsHead,
    "m-tabs-item": MTabsItem,
    "m-tabs-body": MTabsBody,
    "m-tabs-pane": MTabsPane,
    "m-popover": MPopover,
    "m-collapse": MCollapse,
    "m-collapse-item": MCollapseItem,
    "m-cascader": MCascader,
    "m-cascader-item": MCascaderItem,
    "m-carousel": MCarousel,
    "m-carousel-item": MCarouselItem,
  },

  data() {
    return {
      city,
      loading1: false,
      loading2: false,
      loading3: false,
      message: "value2",
      selectedTab: "3",
      selectedArr: ["1", "2"],
      city1: [
        {
          name: "aaa",
          id: 1,
          isLeaf: false,
          children: [
            {
              name: "ddd",
              id: 4,
              isLeaf: false,
              children: [
                { name: "jjj", id: 10, isLeaf: true },
                { name: "kkk", id: 11, isLeaf: true },
                { name: "lll", id: 12, isLeaf: true },
              ],
            },
            {
              name: "eee",
              id: 5,
              isLeaf: false,
              children: [
                { name: "mmm", id: 13, isLeaf: true },
                { name: "nnn", id: 14, isLeaf: true },
                { name: "ooo", id: 15, isLeaf: true },
              ],
            },
            { name: "fff", id: 6, isLeaf: true },
          ],
        },
        {
          name: "bbb",
          id: 2,
          isLeaf: false,
          children: [
            { name: "ggg", id: 7, isLeaf: true },
            { name: "hhh", id: 8, isLeaf: true },
            { name: "iii", id: 9, isLeaf: true },
          ],
        },
        { name: "ccc", id: 3, isLeaf: true },
      ],
      selectedCity1: [],
      city2: [],
      selectedCity2: [],
      carouselSelected: "finance",
    };
  },
  mounted() {},
  methods: {
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("bottom");
    },
    showToast3() {
      this.showToast("middle");
    },
    showToast(position) {
      this.$toast(`<span style='color:yellow'>${Math.random()}xxx</span>`, {
        position,
        // enableHTML: true,
      });
    },
    addData() {
      ajax(0, (data) => {
        this.city2 = data;
      });
    },
    loadData(selectedData, callback) {
      const { id } = selectedData;
      ajax(id, (data) => {
        callback(data);
      });
    },
    x(e) {
      // console.log(2, this.city1, e);
      // ajax(e[0].id, (data) => {
      //   console.log(
      //     this.city1.filter((i) => i.parent_id === e[0].id),
      //     this.city1,
      //     e[0].id
      //   );
      //   this.$set(
      //     this.city1.filter((i) => i.parent_id === e[0].id)[0].children,
      //     data
      //   );
      //   console.log(data);
      // });
    },
  },
};
</script>

<style lang="scss">
</style>
