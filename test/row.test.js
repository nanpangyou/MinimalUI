const expect = chai.expect;
import Vue from "vue";
import Col from "../src/component/grid/col";
import Row from "../src/component/grid/row";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
  it("存在.", () => {
    expect(Row).to.be.ok;
  });
  it("可以设置gutter.", (done) => {
    Vue.component("m-row", Row);
    Vue.component("m-col", Col);
    const div = document.createElement("div");
    div.id = "app";
    div.innerHTML = `
      <m-row :gutter='20'>
        <m-col>1</m-col>
        <m-col>1</m-col>
      </m-row>
    `;
    document.body.appendChild(div);
    const vm = new Vue({
      el: "#app"
    });
    setTimeout(() => {
      const colDom = document.querySelector(".m-col");
      expect(getComputedStyle(colDom).paddingRight).to.eq("10px");
      expect(getComputedStyle(colDom).paddingLeft).to.eq("10px");
      div.remove();
      vm.$el.remove();
      vm.$destroy();
      done();
    }, 0);
  });
  it("可以设置align1.", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const rowConstructor = Vue.extend(Row);
    const vm = new rowConstructor({
      propsData: {
        align: "center"
      }
    }).$mount(div);
    const rowDom = document.querySelector(".m-row");
    expect(getComputedStyle(rowDom).justifyContent).to.eq("center");
    vm.$el.remove();
    vm.$destroy();
  });
  it("可以设置align2.", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const rowConstructor = Vue.extend(Row);
    const vm = new rowConstructor({
      propsData: {
        align: "right"
      }
    }).$mount(div);
    const rowDom = document.querySelector(".m-row");
    expect(getComputedStyle(rowDom).justifyContent).to.eq("flex-end");
    vm.$el.remove();
    vm.$destroy();
  });
  it("可以设置align3.", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const rowConstructor = Vue.extend(Row);
    const vm = new rowConstructor({}).$mount(div);
    const rowDom = document.querySelector(".m-row");
    expect(getComputedStyle(rowDom).justifyContent).to.eq("flex-start");
    vm.$el.remove();
    vm.$destroy();
  });
});
