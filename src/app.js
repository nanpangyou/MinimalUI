import Vue from "vue";
import "./css/main";
import MButton from "./component/button/button";
import MIcon from "./component/icon/icon";
import MButtonGroup from "./component/button-group/button-group";
import MInput from "./component/input/input";

Vue.component("m-button", MButton);
Vue.component("m-icon", MIcon);
Vue.component("m-button-group", MButtonGroup);
Vue.component("m-input", MInput);

let app = new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: "value2"
  }
});

import chai, { expect } from "chai";
import spies from "chai-spies";
chai.use(spies);
{
  // 测试button是否含有name属性
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(MButton);
  const vm = new Constructor({
    propsData: {
      name: "setting"
    }
  });
  vm.$mount(div);
  const iconName = vm.$el.querySelector("use").getAttribute("xlink:href");
  expect(iconName).is.eq("#i-setting");
  vm.$el.remove();
  vm.$destroy();
}
{
  //测试button是否可以传loading
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(MButton);
  const vm = new Constructor({
    propsData: {
      name: "setting",
      loading: true
    }
  });
  vm.$mount(div);
  const icons = vm.$el.querySelectorAll("use");
  // 当传入loading和其他icon时，只有loading生效
  expect(icons.length).eq(1);
  const iconName = icons[0].getAttribute("xlink:href");
  expect(iconName).is.eq("#i-loading");
  vm.$el.remove();
  vm.$destroy();
}
{
  // 测试iconPositon属性(icon在左侧)
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(MButton);
  const vm = new Constructor({
    propsData: {
      name: "setting",
      loading: true
    }
  });
  vm.$mount(div);
  const { order } = getComputedStyle(vm.$el.querySelector("svg"));
  expect(order).eq("1");
  vm.$el.remove();
  vm.$destroy();
}
{
  // 测试iconPositon属性(icon在右侧)
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(MButton);
  const vm = new Constructor({
    propsData: {
      name: "setting",
      loading: true,
      iconPosition: "right"
    }
  });
  vm.$mount(div);
  const { order } = getComputedStyle(vm.$el.querySelector("svg"));
  expect(order).eq("2");
  vm.$el.remove();
  vm.$destroy();
}
{
  // 测试按钮点击
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(MButton);
  const vm = new Constructor({
    propsData: {
      name: "setting",
      loading: true,
      iconPosition: "right"
    }
  }).$mount(div); //测试点击的时候必须要挂载到页面上
  const spy = chai.spy(() => {});
  vm.$on("click", spy);
  vm.$el.click();
  expect(spy).have.been.called();
  vm.$el.remove();
  vm.$destroy();
}
