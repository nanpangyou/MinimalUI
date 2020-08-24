const expect = chai.expect;
import Vue from "vue";
import Col from "../src/component/grid/col";
import Row from "../src/component/grid/row";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
  it("存在.", () => {
    expect(Col).to.be.ok;
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
  it("可以设置span.", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const rowConstructor = Vue.extend(Col);
    const vm = new rowConstructor({
      propsData: {
        span: "6"
      }
    }).$mount(div);
    const colDom = document.querySelector(".m-col");
    expect(colDom.getAttribute("class").includes("m-col-6")).to.be.true;
    vm.$el.remove();
    vm.$destroy();
  });
  it("可以设置xs.", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const rowConstructor = Vue.extend(Col);
    const vm = new rowConstructor({
      propsData: {
        xs: {
          span: 3,
          offset: 5
        }
      }
    }).$mount(div);
    const colDom = document.querySelector(".m-col");
    expect(colDom.getAttribute("class").includes("m-xs-col-3")).to.be.true;
    expect(colDom.getAttribute("class").includes("m-xs-col-offset-5")).to.be
      .true;
    vm.$el.remove();
    vm.$destroy();
  });
});
