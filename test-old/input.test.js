const expect = chai.expect;
import Vue from "vue";
import Input from "../src/component/input/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("", () => {
  it("存在.", () => {
    expect(Input).to.be.ok;
  });
  describe("props 属性部分", () => {
    let Constructor = null;
    let vm;
    beforeEach(() => {
      Constructor = Vue.extend(Input);
    });
    afterEach(() => {
      vm.$el.remove();
      vm.$destroy();
    });
    it("可以设置value.", () => {
      vm = new Constructor({
        propsData: {
          value: "xxx"
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("xxx");
    });
    it("可以设置disabled.", () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.getAttribute("disabled")).to.equal("disabled");
    });
    it("可以设置readonly", () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.getAttribute("readonly")).to.equal("readonly");
    });
    it("设置 error ", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          error: "you are wrong"
        }
      }).$mount(div);
      const errorIconElement = vm.$el.querySelector(".icon");
      expect(
        errorIconElement.querySelector("use").getAttribute("xlink:href")
      ).to.equal("#i-error");
      const errorMsgElement = vm.$el.querySelector("span");
      expect(errorMsgElement.innerText).to.equal("you are wrong");
    });
  });
  describe("事件部分", () => {
    let Constructor;
    let vm;
    const triggerWithValueEventList = ["input"];
    const triggerWithoutValueEventList = ["change", "focus", "blur"];
    beforeEach(() => {
      Constructor = Vue.extend(Input);
      vm = new Constructor({}).$mount();
    });
    afterEach(() => {
      vm.$destroy();
    });
    triggerWithValueEventList.map((item) => {
      it(`触发${item}事件`, () => {
        const callback = sinon.fake();
        vm.$on(item, callback);
        let inputElement = vm.$el.querySelector("input");
        let event = new Event(item);
        //创建拥有target的event
        Object.defineProperty(event, "target", {
          value: { value: "hi" },
          enumerable: true
        });
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.called;
        expect(callback).to.have.been.calledWith("hi");
      });
    });
    triggerWithoutValueEventList.map((item) => {
      it(`触发${item}事件`, () => {
        let callback = sinon.fake();
        vm.$on(item, callback);
        let inputElement = vm.$el.querySelector("input");
        let event = new Event(item);
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.called;
      });
    });
  });
});
